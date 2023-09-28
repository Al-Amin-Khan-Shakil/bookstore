import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import { removeBook } from '../redux/books/booksSlice';

const DeleteBook = ({ bookId }) => {
  const dispatch = useDispatch();

  const deleteBook = (Id) => dispatch(removeBook(Id));
  return (
    <button type="button" className="del-btn" onClick={() => deleteBook(bookId)}>Delete</button>
  );
};

DeleteBook.propTypes = {
  bookId: PropTypes.string.isRequired,
};

export default DeleteBook;
