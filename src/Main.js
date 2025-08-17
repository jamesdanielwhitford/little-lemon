import { Link } from 'react-router-dom';
import { useState } from 'react';

const menuItems = [
  {
    id: 1,
    name: "Greek Salad",
    description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago-style feta cheese dressing.",
    price: "$12.99",
    image: "/images/3b97d1aaeb0c85a7222b2a4f2553d496ed5bd115.jpg",
    category: "lunch"
  },
  {
    id: 2,
    name: "Bruschetta",
    description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    price: "$7.99",
    image: "/images/3d3cce7a3104bf255ed0e69195e2a157338c1bff.jpg",
    category: "lunch"
  },
  {
    id: 3,
    name: "Lemon Dessert",
    description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    price: "$5.00",
    image: "/images/5a56cb0a6cea7dd9e4260ae87b268bd3eee8527d.jpg",
    category: "desserts"
  },
  {
    id: 4,
    name: "Mediterranean Fish",
    description: "Fresh catch of the day grilled with lemon, herbs, and olive oil, served with seasonal vegetables.",
    price: "$22.50",
    image: "/images/5b33e9cd6067eb9aa7ce588a24f8a5d73bf37ee0.jpg",
    category: "mains"
  },
  {
    id: 5,
    name: "Grilled Vegetables",
    description: "Seasonal vegetables grilled to perfection with Mediterranean herbs, olive oil, and balsamic glaze.",
    price: "$14.99",
    image: "/images/871655af5e4849aa43a6d293284825002e7aeb50.jpg",
    category: "alacarte"
  },
  {
    id: 6,
    name: "Mediterranean Pasta",
    description: "Fresh pasta tossed with sun-dried tomatoes, kalamata olives, and feta cheese in our signature herb oil.",
    price: "$16.50",
    image: "/images/957db75e6b654e07f65da12b96dc858c5995ed28.jpg",
    category: "mains"
  }
];

function Main() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredItems = activeFilter === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeFilter);

  const handleFilterClick = (category) => {
    setActiveFilter(category);
  };

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
            <li>
              <button 
                onClick={() => handleFilterClick('all')}
                className={activeFilter === 'all' ? 'active' : ''}
              >
                All
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleFilterClick('lunch')}
                className={activeFilter === 'lunch' ? 'active' : ''}
              >
                Lunch
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleFilterClick('mains')}
                className={activeFilter === 'mains' ? 'active' : ''}
              >
                Mains
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleFilterClick('desserts')}
                className={activeFilter === 'desserts' ? 'active' : ''}
              >
                Desserts
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleFilterClick('alacarte')}
                className={activeFilter === 'alacarte' ? 'active' : ''}
              >
                A La Carte
              </button>
            </li>
          </ul>
        </nav>
        
        <div className="menu-items">
          {filteredItems.map(item => (
            <article key={item.id} className="menu-item">
              <img src={item.image} alt={item.name} className="menu-item-image" />
              <div className="menu-item-content">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <span className="price">{item.price}</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;