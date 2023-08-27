import { Component } from "react"
import { ContactForm } from "./ContactsForm/ContactForm";
import { ContactsList } from "./ContactList/ContactList";
import { nanoid } from "nanoid";
import { Layout, Subtitle, Title } from "./Layout";
import { Filter } from "./Filter/Filter";

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = newContact => {
    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        {
          id: nanoid(),
          ...newContact,
        },
      ],
    }));
  };

  changeFilter = newFilter => {
    this.setState({ filter: newFilter });
  };

  getFilterContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact => {
      contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getFilterContacts();
    return (
      <Layout>
        <Title>Phonebook</Title>
        <ContactForm onAdd={this.addContact} />
        <Subtitle>Contacts</Subtitle>
        <Filter value={filter} onChangeFilter={this.changeFilter} />
        <ContactsList contacts={this.state.contacts} onDelete={this.deleteContact} />
      </Layout>
    );
  }
};
