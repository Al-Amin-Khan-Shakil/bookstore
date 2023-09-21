const AddBook = () => (
  <form action="#" className="addbook-form">
    <input
      type="text"
      name="title"
      id="title"
      value="title"
      placeholder="Add a new book..."
    />
    <input
      type="text"
      name="author"
      id="author"
      value="author"
      placeholder="Add author..."
    />
    <button type="submit" className="add-btn">Add</button>
  </form>
);

export default AddBook;
