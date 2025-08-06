import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import OurTeam from './OurTeam';

test('redeers all the text elements', () => {
    // Render the OurTeam component wrapped in MemoryRouter
    render(<OurTeam />);
    
    // Check if the main title is present
    expect(screen.getByText('We are the people who make up')).toBeInTheDocument();
    expect(screen.getByText('Milimani Enterprises')).toBeInTheDocument();
    
    // Check if all team member titles are present
    expect(screen.getByText('Head Of Operations')).toBeInTheDocument();
    expect(screen.getByText('Head Of Marketing')).toBeInTheDocument();
    expect(screen.getByText('Head Of Finance')).toBeInTheDocument();
    expect(screen.getByText('Head Of Production')).toBeInTheDocument();
    const teamMember = screen.getAllByText('Production Team');
    expect(teamMember.length).toBe(2);

    // Check if all team member names are present
    expect(screen.getByText('Patricia Toroitich')).toBeInTheDocument();
    expect(screen.getByText('Eric Nshimiyimana')).toBeInTheDocument();
    expect(screen.getByText('Judy Uwase')).toBeInTheDocument();
    expect(screen.getByText('Jean Habimana')).toBeInTheDocument();
    expect(screen.getByText('Aline Umutoni')).toBeInTheDocument();
    expect(screen.getByText('Claude Uwimana')).toBeInTheDocument();
    expect(screen.getByText('David Kagabo')).toBeInTheDocument();
    expect(screen.getByText('Patrick Mugisha')).toBeInTheDocument();
});

test('renders all images', () => {
    // Render the OurTeam component wrapped in MemoryRouter
    render(<OurTeam />);

    // Check if all images are present
    const images = screen.getAllByRole('img'); // This will select all img elements
    expect(images.length).toBe(8); // There should be 8 images
    expect(images[0]).toHaveAttribute('alt', 'Founder/CEO');
    expect(images[1]).toHaveAttribute('alt', 'Managing director');
    expect(images[2]).toHaveAttribute('alt', 'Head of operations');
    expect(images[3]).toHaveAttribute('alt', 'Head of marketing');
    expect(images[4]).toHaveAttribute('alt', 'Head of finance');
    expect(images[5]).toHaveAttribute('alt', 'Head of production');
    expect(images[6]).toHaveAttribute('alt', 'Production team member');
    expect(images[7]).toHaveAttribute('alt', 'Production team member');})