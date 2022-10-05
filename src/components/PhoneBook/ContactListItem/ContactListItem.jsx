import PropTypes from 'prop-types';
import { Container } from './ContactListItem.styled';

import Avatar from 'react-avatar';
import { useDeleteContactMutation } from 'redux/api';

const ContactListItem = ({ contact }) => {
  const [deleteContact, { isLoading: removing }] = useDeleteContactMutation();

  return (
    <>
      <Avatar
        size="25"
        color="#056cf2"
        name={contact.name}
        round={true}
        shape="square"
      />
      <Container>
        <p>
          {contact.name}:<span>{contact.phone}</span>
        </p>
        <button
          disabled={removing}
          type="button"
          onClick={() => deleteContact(contact.id)}
        >
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
