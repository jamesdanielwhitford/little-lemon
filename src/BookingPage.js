import { useReducer, useState } from 'react';
import BookingForm from './BookingForm';
import { fetchAPI, submitAPI } from './api';

// Initial available times
const initializeTimes = () => {
  return [
    '17:00',
    '18:00', 
    '19:00',
    '20:00',
    '21:00',
    '22:00'
  ];
};

// Reducer function for managing available times
const timesReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return action.payload;
    default:
      return state;
  }
};

function BookingPage() {
  const [availableTimes, dispatch] = useReducer(timesReducer, [], initializeTimes);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const updateTimes = async (selectedDate) => {
    if (!selectedDate) return;
    
    setIsLoading(true);
    setError('');
    
    try {
      const times = await fetchAPI(selectedDate);
      dispatch({ type: 'UPDATE_TIMES', payload: times });
    } catch (err) {
      setError('Failed to load available times. Please try again.');
      console.error('Error fetching times:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const submitForm = async (formData) => {
    setIsLoading(true);
    setError('');
    
    try {
      await submitAPI(formData);
      
      // Show success message
      alert(`Reservation confirmed for ${formData.guests} guest${formData.guests > 1 ? 's' : ''} on ${formData.date} at ${formData.time}${formData.occasion ? ' for ' + formData.occasion : ''}.`);
      
      // Reset times to initial state
      dispatch({ type: 'UPDATE_TIMES', payload: initializeTimes() });
      
    } catch (err) {
      setError(err.message || 'Failed to submit reservation. Please try again.');
      console.error('Error submitting reservation:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main>
      {error && (
        <div className="error-banner" role="alert">
          {error}
        </div>
      )}
      <BookingForm
        availableTimes={availableTimes}
        onDateChange={updateTimes}
        onSubmit={submitForm}
        isLoading={isLoading}
      />
    </main>
  );
}

export default BookingPage;