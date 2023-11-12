import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from '../CreateForm/CreateForm';
import ContactItem from '../ContactItem/ContactItem';
import Filter from '../Filter/Filter';
import { Container, ContactsContainer } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
    find: '',
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addContact = () => {
    const { contacts, name, number } = this.state;
    if (name && number) {
      if (contacts.some(contact => contact.name === name)) {
        alert(`${name} is already in contacts!`);
      } else {
        const newContact = {
          id: nanoid(),
          name: name,
          number: number,
        };
        this.setState({
          contacts: [...contacts, newContact],
          name: '',
          number: '',
        });
      }
    }
  };

  getFilteredContacts = () => {
    const { contacts, find } = this.state;
    const filteredContacts = contacts.reduce((filtered, contact) => {
      if (contact.name.toLowerCase().includes(find.toLowerCase())) {
        filtered.push(contact);
      }
      return filtered;
    }, []);
    return filteredContacts;
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { name, number, find } = this.state;
    const filteredContacts = this.getFilteredContacts();

    return (
      <Container>
        <ContactForm
          name={name}
          number={number}
          handleInputChange={this.handleInputChange}
          addContact={this.addContact}
        />
        <Filter filter={find} handleInputChange={this.handleInputChange} />
        <ContactsContainer>
          {filteredContacts.map((contact) => (
            <ContactItem
              key={contact.id}
              contact={contact}
              deleteContact={this.deleteContact}
            />
          ))}
        </ContactsContainer>
      </Container>
    );
  }
}

