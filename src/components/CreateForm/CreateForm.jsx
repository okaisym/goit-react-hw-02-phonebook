import React from 'react';
import { Label, AddContactBtn, Input, Title } from '../App/App.styled';

const ContactForm = ({ name, number, handleInputChange, addContact }) => (   
  <form>
    <Title>Phonebook</Title>
    <Label htmlFor="nameInput">Name:</Label>
    <Input
      type="text"
      id="nameInput"
      name="name"
      value={name}
      onChange={handleInputChange}
      required
    />
    <Label htmlFor="numberInput">Number:</Label>
    <Input
      type="text"
      id="numberInput"
      name="number"
      value={number}
      onChange={handleInputChange}
      required
    />
    <AddContactBtn type="button" onClick={addContact}>
      Add contact
    </AddContactBtn>
  </form>
);

export default ContactForm;