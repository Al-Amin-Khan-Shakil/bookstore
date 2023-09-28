import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

const AddBook = () => {
  const books = useSelector((state) => state.book.books);
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleAuthor = (event) => {
    setAuthor(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = {
      item_id: `item${books.length + 1}`,
      title,
      author,
    };

    dispatch(addBook(book));
  };

  return (
    <form onSubmit={handleSubmit} className="addbook-form">
      <input
        type="text"
        name="title"
        id="title"
        value={title}
        placeholder="Add a new book..."
        onChange={handleTitle}
      />
      <input
        type="text"
        name="author"
        id="author"
        value={author}
        placeholder="Add author..."
        onChange={handleAuthor}
      />
      <button type="submit" className="add-btn">Add</button>
    </form>
  );
};

export default AddBook;
