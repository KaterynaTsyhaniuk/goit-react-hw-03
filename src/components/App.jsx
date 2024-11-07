import { useEffect, useState } from "react";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import "./App.css";
import ContactForm from "./ContactForm/ContactForm";
import { nanoid } from "nanoid";
import contactsData from "../assets/contactsData.json";

function App() {
  const [contactList, setContactList] = useState(
    () =>
      JSON.parse(localStorage.getItem("contactList")) ??
      contactsData.map((contact) => ({
        ...contact,
        id: nanoid(),
      }))
  );

  useEffect(() => {
    localStorage.setItem("contactList", JSON.stringify(contactList));
  }, [contactList]);

  const [inputValue, setInputValue] = useState("");

  const handleDeleteContact = (id) => {
    console.log(id);
    // const newContactList = contactList.filter((item) => item.id != id);
    setContactList((prev) => prev.filter((item) => item.id != id));
  };

  const handleChange = (evt) => {
    setInputValue(evt.target.value);
    console.log("Поточне значення:", evt.target.value); //перевірка введення даних
  };

  const filteredContacts = contactList.filter((contact) =>
    contact?.name?.toLowerCase().includes(inputValue.toLowerCase())
  );

  const handleAddContact = (newContact) => {
    setContactList((prevContacts) => [
      ...prevContacts,
      { ...newContact, id: nanoid() },
    ]);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <SearchBox inputValue={inputValue} handleChange={handleChange} />
      <ContactList
        contacts={filteredContacts}
        handleDeleteContact={handleDeleteContact}
      />
    </div>
  );
}

export default App;
