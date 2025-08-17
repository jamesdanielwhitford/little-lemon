import { useState } from 'react';

function BookingForm({ availableTimes, onDateChange, onSubmit, isLoading }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!date) {
      newErrors.date = 'Please select a date';
    } else {
      const selectedDate = new Date(date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        newErrors.date = 'Please select a future date';
      }
    }
    
    if (!time) {
      newErrors.time = 'Please select a time';
    }
    
    if (guests < 1 || guests > 10) {
      newErrors.guests = 'Number of guests must be between 1 and 10';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      const formData = {
        date,
        time,
        guests: parseInt(guests),
        occasion
      };
      
      onSubmit(formData);
      
      // Reset form
      setDate('');
      setTime('');
      setGuests(1);
      setOccasion('');
      setErrors({});
    }
  };

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    setTime(''); // Reset time when date changes
    onDateChange(selectedDate);
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <section className="booking-section">
      <div className="booking-container">
        <h2>Reserve a Table</h2>
        <form onSubmit={handleSubmit} className="booking-form">
          <div className="form-group">
            <label htmlFor="res-date">Choose date*</label>
            <input
              type="date"
              id="res-date"
              value={date}
              onChange={handleDateChange}
              min={today}
              required
              aria-describedby={errors.date ? 'date-error' : undefined}
              className={errors.date ? 'error' : ''}
            />
            {errors.date && (
              <span id="date-error" className="error-message" role="alert">
                {errors.date}
              </span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="res-time">Choose time*</label>
            <select
              id="res-time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
              aria-describedby={errors.time ? 'time-error' : undefined}
              className={errors.time ? 'error' : ''}
            >
              <option value="">Select a time</option>
              {availableTimes.map((timeSlot) => (
                <option key={timeSlot} value={timeSlot}>
                  {timeSlot}
                </option>
              ))}
            </select>
            {errors.time && (
              <span id="time-error" className="error-message" role="alert">
                {errors.time}
              </span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="guests">Number of guests*</label>
            <input
              type="number"
              id="guests"
              placeholder="1"
              min="1"
              max="10"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              required
              aria-describedby={errors.guests ? 'guests-error' : undefined}
              className={errors.guests ? 'error' : ''}
            />
            {errors.guests && (
              <span id="guests-error" className="error-message" role="alert">
                {errors.guests}
              </span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="occasion">Occasion</label>
            <select
              id="occasion"
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
            >
              <option value="">Select an occasion</option>
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
              <option value="Business">Business</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <button type="submit" className="submit-button" disabled={isLoading}>
            {isLoading ? 'Processing...' : 'Make Your Reservation'}
          </button>
        </form>
      </div>
    </section>
  );
}

export default BookingForm;