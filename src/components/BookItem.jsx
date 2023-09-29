import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import DeleteBook from './DeleteBook';
import { getBook } from '../redux/books/booksSlice';

const BookItem = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.book.books);
  useEffect(() => {
    dispatch(getBook());
  }, [dispatch]);

  return (
    <ul className="books-container">
      {books.map((book) => (
        <li className="book-item" key={book.item_id} id={book.item_id}>
          <h2 className="book-title">{book.title}</h2>
          <p className="book-author">{book.author}</p>
          <DeleteBook bookId={book.item_id} />
        </li>
      ))}
    </ul>
  );
};

export default BookItem;
