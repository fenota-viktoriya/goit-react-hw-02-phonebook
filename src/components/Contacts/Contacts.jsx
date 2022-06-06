import PropTypes from 'prop-types';
import { FcFullTrash } from 'react-icons/fc';
import {
  ListContacts,
  ItemContacts,
  TextContacts,
  DeleteBtn,
} from './Contacts.styled';
export function Contacts({ contacts, onClick }) {
  return (
    <ListContacts>
      {contacts.map(({ id, name, number }) => (
        <ItemContacts key={id}>
          <TextContacts>
            {name} : {number}
          </TextContacts>
          <DeleteBtn onClick={() => onClick(id)}>
            <FcFullTrash />
          </DeleteBtn>
        </ItemContacts>
      ))}
    </ListContacts>
  );
}

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};
