import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <div className="nav-container">
          <div className="hamburger-menu">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/booking">Reserve a Table</Link></li>
          </ul>
          <div className="cart-icon">
            🛒
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;