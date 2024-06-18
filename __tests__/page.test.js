import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import PageWrapper from '../app/page-wrapper'

describe('Page wrapper', () => {
  it('renders a heading', () => {
    render(<PageWrapper />)

    const heading = screen.getByRole('img', { name: 'Sqysh' })

    expect(heading).toBeInTheDocument()
  })
})