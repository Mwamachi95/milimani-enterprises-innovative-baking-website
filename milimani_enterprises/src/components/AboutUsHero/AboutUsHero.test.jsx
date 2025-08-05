import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AboutUsHero from './AboutUsHero';

test('renders About Us Hero texts',() => {
    // Render the AboutUsHero component
    render(<AboutUsHero />);
    // Check if the main heading is present
    expect(screen.getByText(/Baking\s*Innovatively/i)).toBeInTheDocument();
    // Check if the description text is present
    expect(screen.getByText(/Milimani Enterprises supplies quality baking ingredients and equipment across Rwanda. We blend innovation with a personal touch to help bakers succeed./i)).toBeInTheDocument();
    // Check if the "Learn more" button is present
    expect(screen.getByText(/Learn more/i)).toBeInTheDocument();
});

test('renders the image in the about us page', () => {
    //render the AboutUsHero component
    render(<AboutUsHero />);
    // Check if the man baking image is present
    expect(screen.getByAltText(/Man Baking/i)).toBeInTheDocument();
});