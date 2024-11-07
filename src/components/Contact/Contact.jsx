import { FaUser, FaPhoneAlt } from "react-icons/fa";
import css from "./Contact.module.css";

function Contact({ id, name, number, handleDeleteContact }) {
  return (
    <li className={css.contactItem}>
      <div>
        <p>
          <FaUser />
          {name}
        </p>
        <p>
          <FaPhoneAlt />
          {number}
        </p>
      </div>
      <div>
        <button
          onClick={() => handleDeleteContact(id)}
          className={css.contactBtn}
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default Contact;
