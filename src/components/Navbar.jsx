import { NavLink } from 'react-router-dom';
import { BsFillPersonFill } from 'react-icons/bs';

const Navbar = () => (
  <nav className="nav-bar">
    <a className="nav-brand" href="/">Bookstore CMS</a>
    <ul className="nav-links">
      <li className="menu-list">
        <NavLink className="nav-link" to="/">BOOKS</NavLink>
      </li>
      <li className="menu-list">
        <NavLink className="nav-link" to="/categories">CATEGORIES</NavLink>
      </li>
    </ul>
    <button className="icon-button" type="button">
      <BsFillPersonFill className="primary-color material-icons" />
    </button>
  </nav>
);

export default Navbar;
