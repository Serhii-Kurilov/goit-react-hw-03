import s from './Contact.module.css'
import { FaUser, FaPhoneAlt } from "react-icons/fa";

const Contact = ({ name, number, id,deleteContact }) => {
  return (
    <div className={s.contact}>
      <div className={s.userInfo}>
        <p className={s.name}><FaUser size="15"/> {name}</p>
        <p className={s.number}><FaPhoneAlt size="15"/> {number}</p>
      </div>
      <button className={s.btn} onClick={() => deleteContact(id)} type='button'>Delete</button>
      </div>
  )
}

export default Contact