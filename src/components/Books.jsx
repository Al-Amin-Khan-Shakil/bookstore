import AddBook from './AddBook';
import BookItem from './BookItem';

const Books = () => (
  <div className="container">
    <div>
      <BookItem />
      <div className="horizontal-divider" />
      <AddBook />
    </div>
  </div>
);

export default Books;
