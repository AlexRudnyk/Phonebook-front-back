import { AddContact } from '../../components/addContact/AddContact';
import ContactList from '../../components/contactList';
import Filter from '../../components/filter';
import { ListTitle, Container } from './ContactsView.styled';

export const ContactsView = () => {
  return (
    <Container>
      {/* <Layout /> */}
      {/* <AppTitle>Phonebook</AppTitle> */}
      <AddContact />
      <ListTitle>Contacts</ListTitle>
      <Filter />
      <ContactList />
    </Container>
  );
};
