import Contact from "../Contact/Contact";

function ContactList({ contacts }) {
  return (
    <div>
      <ul>
        {contacts.map((contact) => {
          return (
            <Contact
              key={contact.id}
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
