import BookItem from './BookItem';

const Books = () => {
  const books = [
    {
      id: 1,
      title: 'Days of Dhaka',
      author: 'Kazi Nazrul Islam',
    },
    {
      id: 2,
      title: 'Days of Kalkata',
      author: 'Rabindronath Thakur',
    },
    {
      id: 1,
      title: 'One Day One Night',
      author: 'Jhon Due',
    },
  ];

  return (
    <div className="books-wrapper">
      <BookItem books={books} />
    </div>
  );
};

export default Books;
