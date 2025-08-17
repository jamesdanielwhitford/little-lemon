import { Link } from 'react-router-dom';

function Main() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <Link to="/booking" className="cta-button">Reserve a table</Link>
          </div>
          <div className="hero-image">
            <img src="/images/d4ac7f08664b3ab85e379c0cfcfb44c74aa0a76e.jpg" alt="Mediterranean dishes" />
          </div>
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
            <img src="/images/3b97d1aaeb0c85a7222b2a4f2553d496ed5bd115.jpg" alt="Greek Salad" className="menu-item-image" />
            <div className="menu-item-content">
              <h3>Greek Salad</h3>
              <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago-style feta cheese dressing.</p>
              <span className="price">$12.99</span>
            </div>
          </article>
          
          <article className="menu-item">
            <img src="/images/3d3cce7a3104bf255ed0e69195e2a157338c1bff.jpg" alt="Bruschetta" className="menu-item-image" />
            <div className="menu-item-content">
              <h3>Bruschetta</h3>
              <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
              <span className="price">$7.99</span>
            </div>
          </article>
          
          <article className="menu-item">
            <img src="/images/5a56cb0a6cea7dd9e4260ae87b268bd3eee8527d.jpg" alt="Lemon Dessert" className="menu-item-image" />
            <div className="menu-item-content">
              <h3>Lemon Dessert</h3>
              <p>This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
              <span className="price">$5.00</span>
            </div>
          </article>

          <article className="menu-item">
            <img src="/images/5b33e9cd6067eb9aa7ce588a24f8a5d73bf37ee0.jpg" alt="Mediterranean Fish" className="menu-item-image" />
            <div className="menu-item-content">
              <h3>Mediterranean Fish</h3>
              <p>Fresh catch of the day grilled with lemon, herbs, and olive oil, served with seasonal vegetables.</p>
              <span className="price">$22.50</span>
            </div>
          </article>

          <article className="menu-item">
            <img src="/images/871655af5e4849aa43a6d293284825002e7aeb50.jpg" alt="Grilled Vegetables" className="menu-item-image" />
            <div className="menu-item-content">
              <h3>Grilled Vegetables</h3>
              <p>Seasonal vegetables grilled to perfection with Mediterranean herbs, olive oil, and balsamic glaze.</p>
              <span className="price">$14.99</span>
            </div>
          </article>

          <article className="menu-item">
            <img src="/images/957db75e6b654e07f65da12b96dc858c5995ed28.jpg" alt="Mediterranean Pasta" className="menu-item-image" />
            <div className="menu-item-content">
              <h3>Mediterranean Pasta</h3>
              <p>Fresh pasta tossed with sun-dried tomatoes, kalamata olives, and feta cheese in our signature herb oil.</p>
              <span className="price">$16.50</span>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

export default Main;