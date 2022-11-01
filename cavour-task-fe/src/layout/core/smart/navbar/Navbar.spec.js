import { render, screen, fireEvent} from '@testing-library/react'
import React from 'react'
import '@testing-library/jest-dom'
import Navbar from './Navbar'

describe('<Navbar />', () => {
 
  test('should be open the projects dropdown', () => {
    
    render(<Navbar />)
    
    const projects = screen.getByText('Projects');
    fireEvent.click(projects);
    const projectsDropdown = screen.getByTestId('projects-list')

    const classList = projectsDropdown.classList
    expect(classList[0]).toBe('projects-list')
    
    const display = projectsDropdown.style.display;
    expect(display).toBe('block');
  })

  test('should be close when click out of box dropdown', () => {

  })

})