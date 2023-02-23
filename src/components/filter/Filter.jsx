import { FilterInput, FilterTitle } from './Filter.styled';
// import { DebounceInput } from 'react-debounce-input';
import { useDispatch } from 'react-redux';
import { filterMyContact } from 'redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const handleChangeFilter = event => {
    dispatch(filterMyContact(event.target.value));
  };

  return (
    <>
      <FilterTitle>Find contacts by name</FilterTitle>
      <FilterInput
        type="text"
        onChange={handleChangeFilter}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </>
  );
};

export default Filter;
