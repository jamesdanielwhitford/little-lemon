import { Link } from 'react-router-dom';

function Main() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          <Link to="/booking" className="cta-button">Reserve a table</Link>
        </div>
      </section>
      
      <section className="menu">
        <h2>ORDER FOR DELIVERY!</h2>
        <nav className="menu-nav">
          <ul>
            <li><a href="#lunch">Lunch</a></li>
            <li><a href="#mains">Mains</a></li>
            <li><a href="#desserts">Desserts</a></li>
            <li><a href="#alacarte">A La Carte</a></li>
            <li><a href="#specials">Specials</a></li>
          </ul>
        </nav>
        
        <div className="menu-items">
          <article className="menu-item">
            <h3>Greek Salad</h3>
            <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago...</p>
            <span className="price">$12.99</span>
          </article>
          
          <article className="menu-item">
            <h3>Bruschetta</h3>
            <p>Our Bruschetta is made from grilled bread that has been smeared with garli...</p>
            <span className="price">$7.99</span>
          </article>
          
          <article className="menu-item">
            <h3>Grilled Fish</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
            <span className="price">$20.00</span>
          </article>
        </div>
      </section>
    </main>
  );
}

export default Main;