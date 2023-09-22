import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <div className="logo">Bookstore CMS</div>
    <ul className="menu">
      <li className="menu-list">
        <NavLink className="navlink" to="/">Books</NavLink>
      </li>
      <li className="menu-list">
        <NavLink className="navlink" to="/categories">Categories</NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
