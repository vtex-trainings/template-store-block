import React from 'react'
import { render } from '@vtex/test-tools/react'
import Title from '../Title'

describe('Title Component', () => {
  const { getByText } = render(<Title />)

  it('should render the default title', () => {
    expect(getByText(/Countdown/)).toBeDefined()
  })
})
