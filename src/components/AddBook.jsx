import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/booksSlice';

const AddBook = () => {
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
      item_id: uuidv4(),
      title,
      author,
      category: 'Default category',
    };

    if (author && title) {
      dispatch(addBook(book));
      setTitle('');
      setAuthor('');
    }
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
