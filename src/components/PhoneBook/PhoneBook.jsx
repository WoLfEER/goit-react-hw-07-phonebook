import ContactListItem from './ContactListItem';
import { Container, ContactList } from './PhoneBook.styled';
import { useSelector } from 'react-redux';
import { getFilterValue } from 'redux/selectors';
import { useGetContactsQuery } from '../../redux/api';

const PhoneBook = () => {
  const { data: contacts = [] } = useGetContactsQuery();
  const filterValue = useSelector(getFilterValue);

  const filteredItems = filterValue
    ? contacts.filter(({ name }) =>
        name.toLowerCase().includes(filterValue.toLowerCase().trim())
      )
    : contacts;

  return (
    <Container>
      <ContactList>
        {filteredItems.map(contact => (
          <ContactListItem key={contact.id} contact={contact} />
        ))}
      </ContactList>
    </Container>
  );
};

export default PhoneBook;
