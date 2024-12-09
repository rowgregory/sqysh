import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Banner from '../app/components/home/Banner.tsx'
import Journey from '../app/components/home/Journey.tsx'
import IHelpEnhance from '../app/components/home/IHelpEnhance.tsx'

jest.mock('@fortawesome/react-fontawesome', () => ({
  FontAwesomeIcon: ({ icon, color, className, size }) => (
    <svg
      data-testid={`icon-${icon.iconName}`}
      style={{ color }}
      className={className}
    />
  )
}))

describe('Banner Component', () => {
  beforeEach(() => {
    render(<Banner />)
  })

  it('should render the main heading', () => {
    const mainHeading = screen.getByRole('heading', {
      name: /transform your digital future with sqysh/i
    })
    expect(mainHeading).toBeInTheDocument()
  })

  it('should render the description paragraph', () => {
    const descriptionParagraph = screen.getByText(
      /Creating tailored websites and applications designed for your unique business needs/i
    )
    expect(descriptionParagraph).toBeInTheDocument()
  })

  it('should render the "Request a Sqysh Quote" link', () => {
    const quoteLink = screen.getByRole('link', {
      name: /request a sqysh quote/i
    })
    expect(quoteLink).toBeInTheDocument()
  })

  it('should render the FontAwesome icon within the quote link', () => {
    const arrowIcon = screen.getByTestId('icon-arrow-right')
    expect(arrowIcon).toBeInTheDocument()
  })
})

describe('IHelpEnhance Component', () => {
  beforeEach(() => {
    render(<IHelpEnhance />)
  })

  it('renders feature cards with titles and descriptions', () => {
    const scalabilityCardTitle = screen.getByText('Scalability')
    expect(scalabilityCardTitle).toBeInTheDocument()
    expect(scalabilityCardTitle).toHaveTextContent('Scalability')

    const analyticsCard = screen.getByText('Analytics and Insights')
    expect(analyticsCard).toBeInTheDocument()
    expect(analyticsCard).toHaveTextContent('Analytics and Insights')
  })
})

describe('Journey Component', () => {
  beforeEach(() => {
    render(<Journey />)
  })

  it('should render the main heading', () => {
    const mainHeading = screen.getByRole('heading', {
      name: /my journey and mission/i
    })
    expect(mainHeading).toBeInTheDocument()
  })

  it('should render the main paragraph', () => {
    const mainParagraph = screen.getByText(
      /committed to delivering exceptional software solutions that empower businesses to achieve their full potential through innovation and expertise/i
    )
    expect(mainParagraph).toBeInTheDocument()
  })

  it('should render the "From Vision to Code" article', () => {
    const visionHeading = screen.getByRole('heading', {
      name: /from vision to code/i
    })
    expect(visionHeading).toBeInTheDocument()
    const visionParagraph = screen.getByText(
      /turning your ideas into custom software solutions/i
    )
    expect(visionParagraph).toBeInTheDocument()
  })

  it('should render the "Automated Workflow Processes" article', () => {
    const workflowHeading = screen.getByRole('heading', {
      name: /automated workflow processes/i
    })
    expect(workflowHeading).toBeInTheDocument()
    const workflowParagraph = screen.getByText(
      /designing custom software solutions that automate repetitive tasks, optimize operations, and boost efficiency/i
    )
    expect(workflowParagraph).toBeInTheDocument()
  })
})
