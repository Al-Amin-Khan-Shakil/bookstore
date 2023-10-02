import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import { removeBook } from '../redux/books/booksSlice';

const DeleteBook = ({ bookId }) => {
  const dispatch = useDispatch();

  const deleteBook = (Id) => dispatch(removeBook(Id));
  return (
    <button type="button" className="button-outline" onClick={() => deleteBook(bookId)}>Remove</button>
  );
};

DeleteBook.propTypes = {
  bookId: PropTypes.string.isRequired,
};

export default DeleteBook;
