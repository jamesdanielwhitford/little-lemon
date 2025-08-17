import { fetchAPI, submitAPI } from './api';

describe('API functions', () => {
  describe('fetchAPI', () => {
    test('returns weekend times for Saturday', async () => {
      const saturday = '2024-01-06'; // A Saturday
      const times = await fetchAPI(saturday);
      
      expect(times).toContain('12:00');
      expect(times).toContain('13:00');
      expect(times).toContain('14:00');
      expect(times.length).toBeGreaterThan(6);
    });

    test('returns weekend times for Sunday', async () => {
      const sunday = '2024-01-07'; // A Sunday
      const times = await fetchAPI(sunday);
      
      expect(times).toContain('12:00');
      expect(times).toContain('13:00');
      expect(times).toContain('14:00');
      expect(times.length).toBeGreaterThan(6);
    });

    test('returns weekday times for Monday', async () => {
      const monday = '2024-01-08'; // A Monday
      const times = await fetchAPI(monday);
      
      expect(times).not.toContain('12:00');
      expect(times).not.toContain('13:00');
      expect(times).not.toContain('14:00');
      expect(times).toContain('17:00');
      expect(times).toContain('18:00');
      expect(times.length).toBe(6);
    });

    test('returns an array of time strings', async () => {
      const date = '2024-01-10';
      const times = await fetchAPI(date);
      
      expect(Array.isArray(times)).toBe(true);
      times.forEach(time => {
        expect(typeof time).toBe('string');
        expect(time).toMatch(/^\d{2}:\d{2}$/); // Format: HH:MM
      });
    });
  });

  describe('submitAPI', () => {
    test('returns true on successful submission', async () => {
      const formData = {
        date: '2024-01-15',
        time: '18:00',
        guests: 4,
        occasion: 'Birthday'
      };

      // Mock Math.random to always return a high value (success)
      const originalRandom = Math.random;
      Math.random = jest.fn(() => 0.9);

      const result = await submitAPI(formData);
      expect(result).toBe(true);

      // Restore original Math.random
      Math.random = originalRandom;
    });

    test('throws error on failed submission', async () => {
      const formData = {
        date: '2024-01-15',
        time: '18:00',
        guests: 4,
        occasion: 'Birthday'
      };

      // Mock Math.random to always return a low value (failure)
      const originalRandom = Math.random;
      Math.random = jest.fn(() => 0.05);

      await expect(submitAPI(formData)).rejects.toThrow('Failed to submit reservation. Please try again.');

      // Restore original Math.random
      Math.random = originalRandom;
    });

    test('logs the form data on success', async () => {
      const formData = {
        date: '2024-01-15',
        time: '18:00',
        guests: 4,
        occasion: 'Birthday'
      };

      // Mock console.log
      const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
      
      // Mock Math.random to always return a high value (success)
      const originalRandom = Math.random;
      Math.random = jest.fn(() => 0.9);

      await submitAPI(formData);
      
      expect(consoleSpy).toHaveBeenCalledWith('Reservation submitted successfully:', formData);

      // Restore
      Math.random = originalRandom;
      consoleSpy.mockRestore();
    });
  });
});