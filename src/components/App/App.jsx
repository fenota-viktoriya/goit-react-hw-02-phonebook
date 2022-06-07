import { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { Form } from 'components/Form';
import { Contacts } from 'components/Contacts';
import { Filter } from 'components/Filter';
import { Container, MainTitle, Title } from './App.styled';

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
    const { filter, contacts } = this.state;
    const onChangeFilter = this.onChangeFilter;

    return (
      <Container>
        <MainTitle>Phone book</MainTitle>
        <Form onSubmit={addContact} />
        {contacts.length !== 0 && <Title>Contacts</Title>}
        {contacts.length !== 0 && (
          <Filter value={filter} onChange={onChangeFilter} />
        )}
        <Contacts contacts={visibleContents} onClick={this.deleteContacts} />
      </Container>
    );
  }
}

App.propTypes = {
  state: PropTypes.objectOf(
    PropTypes.shape({
      contacts: PropTypes.array,
      filter: PropTypes.string,
    })
  ),
};
