import PropTypes from "prop-types";
import ContactListItem from './ContactListItem';
import { useSelector } from "react-redux";

const ContactList = () => {
    const contacts = useSelector(state => state.contacts);
  return (
    <ul>
      {contacts.map(item =>
        <ContactListItem key={item.id} name={item.name} number={item.number} contactID={item.id} />)}
    </ul>)
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
  })),
}

export default ContactList;