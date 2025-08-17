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
            <img src="/images/f21897ecfdee7d5927d1ec7b61408485ab9f6838.jpg" alt="Mediterranean dishes" />
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
            <img src="/images/49a4f4fdcc436f25940a66afb4ae5e3f73861bdf.jpg" alt="Bruschetta" className="menu-item-image" />
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
            <img src="/images/725cbe0ca5da8536fc99c51e00d4d13628bd9745.jpg" alt="Mediterranean Pasta" className="menu-item-image" />
            <div className="menu-item-content">
              <h3>Mediterranean Pasta</h3>
              <p>Fresh pasta tossed with sun-dried tomatoes, kalamata olives, and feta cheese in our signature herb oil.</p>
              <span className="price">$16.50</span>
            </div>
          </article>

          <article className="menu-item">
            <img src="/images/86e25d3f0d3ed062c33bceae17967224721fb34e.jpg" alt="Grilled Lamb" className="menu-item-image" />
            <div className="menu-item-content">
              <h3>Grilled Lamb</h3>
              <p>Tender lamb chops marinated in Mediterranean herbs and grilled to perfection, served with roasted vegetables.</p>
              <span className="price">$24.99</span>
            </div>
          </article>

          <article className="menu-item">
            <img src="/images/957db75e6b654e07f65da12b96dc858c5995ed28.jpg" alt="Seafood Platter" className="menu-item-image" />
            <div className="menu-item-content">
              <h3>Seafood Platter</h3>
              <p>A selection of the freshest catch including grilled octopus, prawns, and sea bass with lemon and herbs.</p>
              <span className="price">$28.00</span>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

export default Main;