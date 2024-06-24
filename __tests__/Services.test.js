import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Services from '../app/services/page.tsx';

const servicesData = [
  {
    icon: 'fa-icon',
    color: '#000',
    title: 'Service 1',
    text: 'Description for service 1',
  },
  {
    icon: 'fa-icon',
    color: '#000',
    title: 'Service 2',
    text: 'Description for service 2',
  },
];

describe('Services Component', () => {
  beforeEach(() => {
    render(<Services />);
  });

  it('should render the main heading', () => {
    const mainHeading = screen.getByRole('heading', { name: /from dream to deployment/i });
    expect(mainHeading).toBeInTheDocument();
  });

  it('should render the main description', () => {
    const mainDescription = screen.getByText(/blending creativity and technology to accelerate business growth/i);
    expect(mainDescription).toBeInTheDocument();
  });

  it('should render the first SqyshQuoteBtn', () => {
    const quoteButtons = screen.getAllByRole('link', { name: /request a sqysh quote/i });
    expect(quoteButtons[0]).toBeInTheDocument();
  });

  it('should render the project scope heading', () => {
    const projectScopeHeading = screen.getByRole('heading', { name: /project scope & services/i });
    expect(projectScopeHeading).toBeInTheDocument();
  });

  it('should render all service sections', () => {
    servicesData.forEach((_, i) => {
      const serviceSection = screen.getByTestId(`service-${i}`);
      expect(serviceSection).toBeInTheDocument();
    });
  });

  it('should render the concluding paragraph', () => {
    const concludingParagraph = screen.getByText(/by providing a holistic suite of services/i);
    expect(concludingParagraph).toBeInTheDocument();
  });
});