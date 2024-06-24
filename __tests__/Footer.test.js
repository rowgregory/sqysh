import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Footer from '../app/components/Footer.tsx';


jest.mock('@fortawesome/react-fontawesome', () => ({
  FontAwesomeIcon: ({ icon, size, color, className, 'data-testid': dataTestId }) => (
    <svg data-testid={dataTestId} className={className} style={{ fontSize: size, color }} />
  ),
}));

describe('Footer Component', () => {
  beforeEach(() => {
    render(<Footer />);
  });

  it('should render the Sqysh logo and name', () => {
    const logo = screen.getByAltText('Sqysh');
    expect(logo).toBeInTheDocument();
    const name = screen.getByText('Sqysh', { selector: 'p' });
    expect(name).toBeInTheDocument();
  });

  it('should render the Services link', () => {
    const servicesLink = screen.getByRole('link', { name: /services/i });
    expect(servicesLink).toBeInTheDocument();
  });

  it('should render the Request a Sqysh Quote link', () => {
    const quoteLink = screen.getByRole('link', { name: /request a sqysh quote/i });
    expect(quoteLink).toBeInTheDocument();
  });

  it('should render the Privacy Policy link', () => {
    const privacyPolicyLinks = screen.getAllByRole('link', { name: /privacy policy/i });
    privacyPolicyLinks.forEach(link => expect(link).toBeInTheDocument());
  });

  it('should render the Terms of Service link', () => {
    const termsOfServiceLinks = screen.getAllByRole('link', { name: /terms of service/i });
    termsOfServiceLinks.forEach(link => expect(link).toBeInTheDocument());
  });

  it('should render the copyright notice', () => {
    const currentYear = new Date().getFullYear();
    const copyrightNotice = screen.getByText(new RegExp(`© ${currentYear} Sqysh. All Rights Reserved`, 'i'));
    expect(copyrightNotice).toBeInTheDocument();
  });

  it('should render the Instagram icon', () => {
    const instagramIcon = screen.getByTestId('instagram-icon');
    expect(instagramIcon).toBeInTheDocument();
  });

  it('should render the Facebook icon', () => {
    const facebookIcon = screen.getByTestId('facebook-icon');
    expect(facebookIcon).toBeInTheDocument();
  });

  it('should render the Threads icon', () => {
    const threadsIcon = screen.getByTestId('threads-icon');
    expect(threadsIcon).toBeInTheDocument();
  });
});