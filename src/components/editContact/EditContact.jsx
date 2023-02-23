import {
  useFetchContactsQuery,
  useEditContactMutation,
} from 'redux/contactsSlice';
import { Modal, Overlay, TitleWrapper } from './EditContact.styled';
import { ContactForm } from 'components/contactForm/ContactForm';
import { Button } from './EditContact.styled';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const EditContact = ({ closeModal, id }) => {
  const { data: contacts } = useFetchContactsQuery();
  const [editContact] = useEditContactMutation();
  const handleCloseModal = () => closeModal(false);

  const findContactById = contacts.filter(contact => contact.id === id);

  const handleEditContact = async fields => {
    try {
      await editContact({ id, ...fields });
      toast.success('Yoohoo, contact is updated');
      handleCloseModal();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Overlay>
      <Modal>
        <TitleWrapper>
          <p>Update contact</p>
          <Button type="button" onClick={handleCloseModal}>
            Close
          </Button>
        </TitleWrapper>
        {contacts && (
          <ContactForm
            onSubmit={handleEditContact}
            btnText={'Update'}
            initialValues={{
              name: findContactById[0].name,
              number: findContactById[0].number,
            }}
          />
        )}
      </Modal>
    </Overlay>
  );
};
