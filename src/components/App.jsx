import { useState } from "react";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import "./App.css";
import ContactForm from "./ContactForm/ContactForm";
import { nanoid } from "nanoid";

function App() {
  const [contactList, setContactList] = useState([
    { id: nanoid(), name: "Rosie Simpson", number: "459-12-56" },
    { id: nanoid(), name: "Hermione Kline", number: "443-89-12" },
    { id: nanoid(), name: "Eden Clements", number: "645-17-79" },
    { id: nanoid(), name: "Annie Copeland", number: "227-91-26" },
  ]);

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
