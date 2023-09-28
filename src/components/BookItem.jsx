// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import DeleteBook from './DeleteBook';

const BookItem = () => {
  const books = useSelector((state) => state.book.books);

  return (
    <ul className="books-container">
      {books.map((book) => (
        <li className="book-item" key={book.item_id} id={book.item_id}>
          <h2 className="book-title">{book.title}</h2>
          <p className="book-author">{book.author}</p>
          <DeleteBook />
        </li>
      ))}
    </ul>
  );
};

// BookItem.propTypes = {
//   books: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       title: PropTypes.string.isRequired,
//       author: PropTypes.string.isRequired,
//     }),
//   ).isRequired,
// };

export default BookItem;
