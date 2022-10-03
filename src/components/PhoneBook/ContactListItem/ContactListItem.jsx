import PropTypes from 'prop-types';
import { Container } from './ContactListItem.styled';
import { removeContact } from 'redux/contactsSlice';
import { useDispatch } from 'react-redux';
import Avatar from 'react-avatar';

const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = contactId => {
    dispatch(removeContact(contactId));
  };
  
  return (
    <>
      <Avatar size="25" color='#056cf2' name={contact.name} round={true} shape="square" />
      <Container>
        <p>
          {contact.name}:<span>{contact.number}</span>
        </p>
        <button type="button" onClick={() => handleDelete(contact.id)}>
          Delete
        </button>
      </Container>
    </>
  );
};

export default ContactListItem;

ContactListItem.prototype = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
