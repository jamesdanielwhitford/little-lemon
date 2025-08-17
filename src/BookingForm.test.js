import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import BookingForm from './BookingForm';

// Mock props
const mockProps = {
  availableTimes: ['17:00', '18:00', '19:00', '20:00'],
  onDateChange: jest.fn(),
  onSubmit: jest.fn(),
  isLoading: false
};

describe('BookingForm', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders booking form with all required fields', () => {
    render(<BookingForm {...mockProps} />);
    
    expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/choose time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /make your reservation/i })).toBeInTheDocument();
  });

  test('displays available time options', () => {
    render(<BookingForm {...mockProps} />);
    
    mockProps.availableTimes.forEach(time => {
      expect(screen.getByRole('option', { name: time })).toBeInTheDocument();
    });
  });

  test('validates required fields on submit', async () => {
    render(<BookingForm {...mockProps} />);
    
    const submitButton = screen.getByRole('button', { name: /make your reservation/i });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/please select a date/i)).toBeInTheDocument();
      expect(screen.getByText(/please select a time/i)).toBeInTheDocument();
    });

    expect(mockProps.onSubmit).not.toHaveBeenCalled();
  });

  test('validates date is not in the past', async () => {
    render(<BookingForm {...mockProps} />);
    
    const dateInput = screen.getByLabelText(/choose date/i);
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayString = yesterday.toISOString().split('T')[0];
    
    fireEvent.change(dateInput, { target: { value: yesterdayString } });
    
    const submitButton = screen.getByRole('button', { name: /make your reservation/i });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/please select a future date/i)).toBeInTheDocument();
    });
  });

  test('validates number of guests range', async () => {
    render(<BookingForm {...mockProps} />);
    
    const guestsInput = screen.getByLabelText(/number of guests/i);
    
    // Test value too high
    fireEvent.change(guestsInput, { target: { value: '15' } });
    
    const submitButton = screen.getByRole('button', { name: /make your reservation/i });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/number of guests must be between 1 and 10/i)).toBeInTheDocument();
    });
  });

  test('calls onDateChange when date is selected', () => {
    render(<BookingForm {...mockProps} />);
    
    const dateInput = screen.getByLabelText(/choose date/i);
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowString = tomorrow.toISOString().split('T')[0];
    
    fireEvent.change(dateInput, { target: { value: tomorrowString } });
    
    expect(mockProps.onDateChange).toHaveBeenCalledWith(tomorrowString);
  });

  test('submits form with valid data', async () => {
    render(<BookingForm {...mockProps} />);
    
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowString = tomorrow.toISOString().split('T')[0];
    
    // Fill in form
    fireEvent.change(screen.getByLabelText(/choose date/i), { 
      target: { value: tomorrowString } 
    });
    fireEvent.change(screen.getByLabelText(/choose time/i), { 
      target: { value: '18:00' } 
    });
    fireEvent.change(screen.getByLabelText(/number of guests/i), { 
      target: { value: '4' } 
    });
    fireEvent.change(screen.getByLabelText(/occasion/i), { 
      target: { value: 'Birthday' } 
    });
    
    const submitButton = screen.getByRole('button', { name: /make your reservation/i });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mockProps.onSubmit).toHaveBeenCalledWith({
        date: tomorrowString,
        time: '18:00',
        guests: 4,
        occasion: 'Birthday'
      });
    });
  });

  test('disables submit button when loading', () => {
    render(<BookingForm {...mockProps} isLoading={true} />);
    
    const submitButton = screen.getByRole('button', { name: /processing/i });
    expect(submitButton).toBeDisabled();
  });

  test('has proper accessibility attributes', () => {
    render(<BookingForm {...mockProps} />);
    
    // Check for required attributes
    expect(screen.getByLabelText(/choose date/i)).toHaveAttribute('required');
    expect(screen.getByLabelText(/choose time/i)).toHaveAttribute('required');
    expect(screen.getByLabelText(/number of guests/i)).toHaveAttribute('required');
    
    // Check that fields have proper labels
    expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/choose time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
  });
});