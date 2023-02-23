import { useFetchContactsQuery } from 'redux/contactsSlice';
import { ContactItem } from 'components/contactItem/ContactItem';
import { useSelector } from 'react-redux';
import { selectFilter } from 'redux/filterSlice';

const ContactList = () => {
  const { data: contacts, error, isLoading } = useFetchContactsQuery();
  // console.log(contacts);
  const filter = useSelector(selectFilter);
  const filtredContacts = !contacts
    ? []
    : contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );

  return (
    <>
      {error && <p>Something went wrong</p>}
      {isLoading ? (
        <b>Downloading contacts</b>
      ) : (
        <ul>
          {filtredContacts.map(contact => (
            <ContactItem contact={contact} key={contact._id} />
          ))}
        </ul>
      )}
    </>
  );
};
export default ContactList;
