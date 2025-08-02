import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import OurValues from './OurValues';

test('renders all the content in the OurValues component', () => {
    // Render the OurValues component
    render(<OurValues />)
    // Check if large header is present
    expect(screen.getByText('Our Values')).toBeInTheDocument();
    // Check if all the value headeing are present
    expect(screen.getByText('Quality First')).toBeInTheDocument();
    expect(screen.getByText('Customer Success')).toBeInTheDocument();   
    expect(screen.getByText('Innovation Everyday')).toBeInTheDocument();
    expect(screen.getByText('Integrity Always')).toBeInTheDocument();
    // Check if all the value descriptions are present
    expect(screen.getByText('We never compromise on the standard of the product, every product we is test for consistency, performance and freshness')).toBeInTheDocument();
    expect(screen.getByText('We are committed to ensuring our customers achieve their desired outcomes with our products.')).toBeInTheDocument();
    expect(screen.getByText('We foster a culture of continuous improvement and encourage our team to think outside the box.')).toBeInTheDocument();
    expect(screen.getByText('We uphold the highest standards of integrity in all our actions.')).toBeInTheDocument();
    // Check if the arrow icon is present for each value
    const arrows = screen.getAllByAltText('arrow');
    expect(arrows.length).toBe(4); // There should be 4 arrows
    // Check if the separators are present
    const separators = screen.getAllByRole('separator');
    expect(separators.length).toBe(3); // There should be 3 separators
});