import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Header from '../app/components/Header.tsx';

describe('Header Component', () => {
  beforeEach(() => {
    render(<Header />);
  });

  it('should render the header component', () => {
    const header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();
  });

  it('should render the Sqysh logo', () => {
    const logo = screen.getByAltText('sqysh');
    expect(logo).toBeInTheDocument();
  });

  it('should render the "Sqysh" text in the logo', () => {
    const logoText = screen.getByText('Sqysh', { selector: 'p' });
    expect(logoText).toBeInTheDocument();
  });

  it('should render the Services link', () => {
    const servicesLink = screen.getByRole('link', { name: /services/i });
    expect(servicesLink).toBeInTheDocument();
  });

  it('should render the "Request a Sqysh Quote" button', () => {
    const quoteButton = screen.getByRole('link', { name: /request a sqysh quote/i });
    expect(quoteButton).toBeInTheDocument();
  });

  it('should render the FontAwesome icon within the quote button', () => {
    const arrowIcon = screen.getByTestId('quote-arrow-icon');
    expect(arrowIcon).toBeInTheDocument();
  });
});