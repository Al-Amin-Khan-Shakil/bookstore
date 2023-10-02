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

  const categories = ['Fiction', 'Non-Fiction', 'Mystery', 'Science Fiction', 'Fantasy', 'Romance', 'Biography', 'Self-Help', 'History', 'Thriller'];

  const handleSubmit = (e) => {
    e.preventDefault();

    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    const book = {
      item_id: uuidv4(),
      title,
      author,
      category: randomCategory,
    };

    if (author && title) {
      dispatch(addBook(book));
      setTitle('');
      setAuthor('');
    }
  };

  return (
    <section>
      <h2 className="form-title">ADD NEW BOOK</h2>
      <form onSubmit={handleSubmit} className="add-form">
        <input
          className="input title-input"
          type="text"
          name="title"
          id="title"
          value={title}
          placeholder="Book title..."
          onChange={handleTitle}
        />
        <input
          className="input author-input"
          type="text"
          name="author"
          id="author"
          value={author}
          placeholder="Add author..."
          onChange={handleAuthor}
        />
        <button type="submit" className="primary-button-big">ADD BOOK</button>
      </form>
    </section>
  );
};

export default AddBook;
