import PropTypes from 'prop-types';
import DeleteBook from './DeleteBook';

const BookItem = ({ books }) => (
  <ul className="books-container">
    {books.map((book) => (
      <li className="book-item" key={book.id}>
        <h2 className="book-title">{book.title}</h2>
        <p className="book-author">{book.author}</p>
        <DeleteBook />
      </li>
    ))}
  </ul>
);

BookItem.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default BookItem;
