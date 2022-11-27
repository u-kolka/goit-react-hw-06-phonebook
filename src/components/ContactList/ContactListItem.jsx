import React from 'react';
import PropTypes from "prop-types";
import css from "./ContactList.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from 'redux/contactsSlice';

const ContactListItem = ({ name, number, contactID }) => {
    const dispatch = useDispatch();
    const handleDelete = () => {
    dispatch(deleteContact(contactID));
    }
    
    return (
        <li className={css.contact__item}>
            <p>{name}: {number}</p>
            <button className={css.contact__btn} onClick={handleDelete}>Удалить</button>
        </li>
    );
};

ContactListItem.propTypes = {
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
}


export default ContactListItem;