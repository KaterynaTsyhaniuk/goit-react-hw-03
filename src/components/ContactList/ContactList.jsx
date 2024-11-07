import Contact from "../Contact/Contact";

function ContactList({ contacts, handleDeleteContact }) {
  return (
    <div>
      <ul>
        {contacts.map((contact) => {
          return (
            <Contact
              handleDeleteContact={handleDeleteContact}
              key={contact.id}
              id={contact.id}
              name={contact.name}
              number={contact.number}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default ContactList;
