import { describe, expect, test, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import Home from '../app/page'
import Header from '../app/components/Header'

test('Home Page', () => {
  render(<Home />)
  expect(
    screen.getByRole('heading', {
      level: 1,
      name: /Transform Your Digital Future with/
    })
  ).toBeDefined()
})

test('renders the header with the correct elements', () => {
  render(<Header />)

  expect(screen.getByRole('link', { name: /services/i })).toBeDefined()
})
