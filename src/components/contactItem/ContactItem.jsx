import { ListItem, DeleteBtn, EditBtn } from './ContactItem.styled';
import { useDeleteContactMutation } from 'redux/contactsSlice';
import { useState } from 'react';
import { EditContact } from 'components/editContact/EditContact';
import { ImPencil, ImBin2 } from 'react-icons/im';
import { toast } from 'react-toastify';

export const ContactItem = ({ contact }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  const handleDelete = () => {
    deleteContact(contact.id);
    toast.success('Contact deleted');
  };

  return (
    <>
      <ListItem>
        <div>
          {contact.name}: {contact.phone}
        </div>
        <div>{contact.email}</div>
        <div>
          <EditBtn type="button" onClick={() => setIsModalOpen(true)}>
            <ImPencil />
          </EditBtn>
          <DeleteBtn type="button" onClick={handleDelete} disabled={isLoading}>
            <ImBin2 />
          </DeleteBtn>
        </div>
        {isModalOpen && (
          <EditContact id={contact.id} closeModal={setIsModalOpen} />
        )}
      </ListItem>
    </>
  );
};
