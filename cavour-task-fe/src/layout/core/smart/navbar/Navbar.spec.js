import { render, screen} from '@testing-library/react'
import React from 'react'
import '@testing-library/jest-dom'
import Navbar from './Navbar'

describe('<Navbar />', () => {
 
  test('should be change active ', () => {
    
    render(<Navbar />)
    const dashboard = screen.getByText('Dashboard')
    const result = dashboard.classList.contains('isActive')
    expect(result).toBeTruthy();
  })
})