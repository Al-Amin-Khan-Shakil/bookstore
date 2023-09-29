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
    <ul className="books">
      {books.map((book) => (
        <li className="book-item" key={book.item_id} id={book.item_id}>
          <div className="book">
            <div className="book-content">
              <h4 className="book-category">{book.category}</h4>
              <h2 className="book-title">{book.title}</h2>
              <h6 className="book-author">{book.author}</h6>
            </div>
          </div>
          <div className="action-buttons">
            <button type="button" className="button-outline">Comments</button>
            <div className="vertical-divider" />
            <DeleteBook bookId={book.item_id} />
            <div className="vertical-divider" />
            <button type="button" className="button-outline">Edit</button>
          </div>
          <div className="progress-container">
            <div className="circular-progress-container">
              <div className="circular-progress" />
            </div>
            <div className="progress-stat">
              <p className="percent-complete">64%</p>
              <p className="completed">Completed</p>
            </div>
            <div className="progress-divider" />
            <div className="current-chapter-container">
              <div>
                <p className="current-chapter-label">CURRENT CHAPTER</p>
                <p className="current-chapter">Chapter 17</p>
              </div>
              <div>
                <button type="button" className="primary-button">UPDATE PROGRESS</button>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default BookItem;
