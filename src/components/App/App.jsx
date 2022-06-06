import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Form } from 'components/Form/Form';
import { Contacts } from 'components/Contacts/Contacts';
import { Filter } from 'components/Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const baseContact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(({ contacts }) => {
      if (
        contacts.find(
          contact => contact.name.toLowerCase() === name.toLowerCase()
        )
      ) {
        alert(`${name} is already in contacts`);
        return;
      }
      return {
        contacts: [baseContact, ...contacts],
      };
    });
  };

  onChangeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  geFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const normalized = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalized)
    );
  };
  deleteContacts = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const visibleContents = this.geFilteredContacts();
    const addContact = this.addContact;
    const { filter } = this.state;
    const onChangeFilter = this.onChangeFilter;

    return (
      <div>
        <h1>Phonebook</h1>
        <Form onSubmit={addContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={onChangeFilter} />
        <Contacts contacts={visibleContents} onClick={this.deleteContacts} />
      </div>
    );
  }
}
