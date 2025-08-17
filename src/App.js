import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import BookingPage from './BookingPage';

function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/booking" element={<BookingPage />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
