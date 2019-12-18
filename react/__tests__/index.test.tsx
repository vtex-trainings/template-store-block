import React from 'react'
import { render } from '@vtex/test-tools/react'
import Title from '../Title'

describe('Title Component', () => {
  it('should render the default title', () => {
    const { getByText } = render(<Title />)

    expect(getByText(/Countdown/)).toBeDefined()
  })

  it('should render title passed as props', () => {
    const { getByText } = render(<Title title="foo" />)

    expect(getByText(/foo/)).toBeDefined()
  })
})
