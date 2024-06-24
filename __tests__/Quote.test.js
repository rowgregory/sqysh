import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import RequestAQuote from '../app/quote/page.tsx'

global.scrollTo = jest.fn();

jest.mock('../app/actions/createQuote.tsx', () => ({
  __esModule: true,
  default: jest.fn().mockResolvedValue({ id: '12345' }),
}));

describe('RequestAQuote', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should display success message after successful form submission', async () => {
    const { getByText, getByPlaceholderText } = render(<RequestAQuote />);

    fireEvent.change(getByPlaceholderText('Name*'), { target: { value: 'John Doe' } });
    fireEvent.change(getByPlaceholderText('Company Name*'), { target: { value: 'Example Inc.' } });
    fireEvent.change(getByPlaceholderText('Email*'), { target: { value: 'john.doe@example.com' } });
    fireEvent.change(getByPlaceholderText('Phone*'), { target: { value: '1234567890' } });
    fireEvent.change(getByPlaceholderText('Message*'), { target: { value: 'This is a test message.' } });

    fireEvent.click(getByText('SUBMIT'));

    await waitFor(() => {
      expect(getByText(/Thank you for reaching out to/i)).toBeInTheDocument();
      expect(getByText('Quote reference id:')).toBeInTheDocument();
    });
  });
});