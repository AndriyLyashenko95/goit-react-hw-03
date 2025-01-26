import React from 'react';

const Contact = ({ contact, deleteContact }) => {
  return (
        <li>
            <p>{contact.name}: {contact.number}</p>
            <button onClick={() => deleteContact(contact.id)}>Delete</button>
        </li>
    );
};

export default Contact;