import {
  useAddContactMutation,
  useFetchContactsQuery,
} from 'redux/contactsSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ContactForm } from 'components/contactForm/ContactForm';

export const AddContact = () => {
  const [addContact] = useAddContactMutation();
  const { data: contacts } = useFetchContactsQuery();

  const handleAddContact = async values => {
    const isExist = contacts.find(
      contact => contact.name.toLowerCase() === values.name.toLowerCase()
    );

    if (isExist) {
      toast.error(`${values.name} is already in contacts.`);
      return;
    }
    try {
      await addContact(values);
      toast.success(`${values.name} is added to Phonebook.`);
    } catch (error) {
      toast.error('error');
    }
  };

  return <ContactForm onSubmit={handleAddContact} btnText={'Add Contact'} />;
};
