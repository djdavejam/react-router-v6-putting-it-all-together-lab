import React from 'react'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

export const renderWithRouter = (component, { route = '/' } = {}) => {
  return render(
    <MemoryRouter initialEntries={[route]}>
      {component}
    </MemoryRouter>
  )
}

// Re-export everything else
export * from '@testing-library/react'