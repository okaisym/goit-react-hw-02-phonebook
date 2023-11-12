import React from 'react';
import { Contact, ListItem, DeleteBtn } from '../App/App.styled';

const ContactItem = ({ contact, deleteContact }) => (
  <Contact>
    <ListItem>
      {contact.name}: {contact.number}
    </ListItem>
    <DeleteBtn type="button" onClick={() => deleteContact(contact.id)}>
      Delete
    </DeleteBtn>
  </Contact>
);

export default ContactItem;