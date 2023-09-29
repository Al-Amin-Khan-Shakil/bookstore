import { NavLink } from 'react-router-dom';
import { BsFillPersonFill } from 'react-icons/bs';

const Navbar = () => (
  <nav className="nav-bar">
    <NavLink className="nav-brand" to="/">Bookstore CMS</NavLink>
    <ul className="nav-links">
      <li className="menu-list">
        <NavLink className="nav-link" to="/">BOOKS</NavLink>
      </li>
      <li className="menu-list">
        <NavLink className="nav-link" to="/categories">CATEGORIES</NavLink>
      </li>
    </ul>
    <button className="icon-button" type="button">
      <BsFillPersonFill className="primary-color" />
    </button>
  </nav>
);

export default Navbar;
