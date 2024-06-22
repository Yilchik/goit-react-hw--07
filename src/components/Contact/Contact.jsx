import css from "./Contact.module.css";
import { RiUser3Fill } from "react-icons/ri";
import { BsTelephoneFill } from "react-icons/bs";

const Contact = ({ contact }) => {
  return (
    <div className={css.container}>
      <div className={css.card}>
        <p>
          <RiUser3Fill className={css.myIcon} size={20} />
          {contact.name}
        </p>
        <p>
          <BsTelephoneFill className={css.myIcon} size={20} />
          {contact.number}
        </p>
      </div>
      <button className={css.btn}>Delete</button>
    </div>
  );
};
export default Contact;
