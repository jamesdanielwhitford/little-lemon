import { Link } from 'react-router-dom';

function ConfirmedBooking() {
  return (
    <main>
      <section className="confirmation-section">
        <div className="confirmation-container">
          <div className="success-icon">✅</div>
          <h1>Booking Confirmed!</h1>
          <p className="confirmation-message">
            Thank you for choosing Little Lemon. Your table reservation has been successfully confirmed.
          </p>
          <p className="confirmation-details">
            You will receive a confirmation email shortly with all the details of your reservation.
          </p>
          <div className="confirmation-actions">
            <Link to="/" className="cta-button">
              Return to Home
            </Link>
            <Link to="/booking" className="secondary-button">
              Make Another Reservation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ConfirmedBooking;