import { Component } from 'react';
import PropTypes from 'prop-types';
import { FormContact, Label, InputContact, ButtonContact } from './Form.styled';

export class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handelInputChange = e => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;
    this.setState({
      [name]: value,
    });
  };
  onSubmitForm = e => {
    e.preventDefault();
    const onSubmit = this.props.onSubmit;
    const state = this.state;
    const reset = this.reset;
    onSubmit(state);
    reset();
  };
  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const onSubmitForm = this.onSubmitForm;
    const handelInputChange = this.handelInputChange;
    const { name, number } = this.state;
    return (
      <FormContact onSubmit={onSubmitForm}>
        <Label>
          Name
          <InputContact
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handelInputChange}
          />
        </Label>
        <Label>
          Num
          <InputContact
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handelInputChange}
          />
        </Label>

        <ButtonContact type="submit">Add contact</ButtonContact>
      </FormContact>
    );
  }
}

Form.propTypes = {
  state: PropTypes.objectOf(
    PropTypes.shape({
      name: PropTypes.string,
      number: PropTypes.number,
    })
  ),
};
