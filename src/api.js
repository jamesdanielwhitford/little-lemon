// Mock API functions - in a real app these would call actual endpoints

/**
 * Fetches available time slots for a given date
 * @param {string} date - Date in YYYY-MM-DD format
 * @returns {Promise<string[]>} - Array of available time slots
 */
export const fetchAPI = async (date) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 200));
  
  const selectedDate = new Date(date);
  const dayOfWeek = selectedDate.getDay();
  
  // Weekend times (Saturday = 6, Sunday = 0)
  if (dayOfWeek === 0 || dayOfWeek === 6) {
    return [
      '12:00',
      '13:00', 
      '14:00',
      '17:00',
      '18:00',
      '19:00',
      '20:00',
      '21:00',
      '22:00'
    ];
  }
  
  // Weekday times
  return [
    '17:00',
    '18:00',
    '19:00',
    '20:00', 
    '21:00',
    '22:00'
  ];
};

/**
 * Submits a reservation to the API
 * @param {Object} formData - Reservation details
 * @returns {Promise<boolean>} - Success status
 */
export const submitAPI = async (formData) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Simulate random success/failure for testing
  const success = Math.random() > 0.1; // 90% success rate
  
  if (!success) {
    throw new Error('Failed to submit reservation. Please try again.');
  }
  
  console.log('Reservation submitted successfully:', formData);
  return true;
};