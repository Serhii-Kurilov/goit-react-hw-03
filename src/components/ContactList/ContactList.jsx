import Contact from '../Contact/Contact';
import s from './ContactList.module.css';

const ContactList = ({ contactList, deleteContact }) => {
  return (
      <ul className={s.contactList}>
      {contactList.map((contact) => {
        return (
          <li className={s.contactItem} key={contact.id}>
            <Contact
              name={contact.name}
              number={contact.number}
              id={contact.id}
              deleteContact={deleteContact}
            />
          </li>
        );
      })}
    </ul>
  )
}

export default ContactList