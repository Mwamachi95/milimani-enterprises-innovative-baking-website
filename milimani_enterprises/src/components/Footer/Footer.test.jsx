import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import Footer from './footer';

test('renders logo and company name', () => {
    // Render the Footer component wrapped in MemoryRouter
    render(<Footer />, { wrapper: MemoryRouter });
    // Check if the logo is present
    expect(screen.getByAltText('logo')).toBeInTheDocument();
    // Check if the company name is present
    const elements = screen.getAllByText(/Milimani\s*Enterprises/i);
    // Check if there are two elements with the company name (one for the header and one for the copyright)
    expect(elements.length).toBe(2)
    // Check if the slogan is present
    expect(screen.getByText(/Innovative Baking/i)).toBeInTheDocument();
});

test('renders company information', () => {
    // Render the Footer component wrapped in MemoryRouter
    render(<Footer />, { wrapper: MemoryRouter });
    // Check if the contact number is present
    expect(screen.getByText('+250 788 760 923')).toBeInTheDocument();
    // Check if the email is present
    expect(screen.getByText('info@milimani.rw')).toBeInTheDocument();
    // Check if the addresses are present
    expect(screen.getByText(/Kigali, Rwanda\s*KN 1 Rd/i)).toBeInTheDocument
    expect(screen.getByText(/Kigali, Rwanda\s*Industrial Area/i)).toBeInTheDocument();
});

test('renders all icons', () => {
    // Render the Footer component wrapped in MemoryRouter
    render(<Footer />, { wrapper: MemoryRouter });
    // Check if the social media icons are present 
    expect(screen.getByAltText('facebook')).toBeInTheDocument();
    expect(screen.getByAltText('instagram')).toBeInTheDocument();
    // Check if all the information icons are present
    expect(screen.getByAltText('phone')).toBeInTheDocument();
    expect(screen.getByAltText('email')).toBeInTheDocument();
    expect(screen.getByAltText('store')).toBeInTheDocument();
    expect(screen.getByAltText('factory')).toBeInTheDocument();
});

test('renders seprator and copyright text', () => {
    // Render the Footer component wrapped in MemoryRouter
    render(<Footer />, { wrapper: MemoryRouter });
    // Check if the separator is present
    expect(screen.getByRole('separator')).toBeInTheDocument();
    // Check if the copyright text is present
    const year = new Date().getFullYear();
    expect(screen.getByText(`© ${year} Milimani Enterprises. All rights reserved.`)).toBeInTheDocument();
});

test('renders page links', () => {
    // Render the Footer component wrapped in MemoryRouter
    render(<Footer />, { wrapper: MemoryRouter });
    // Check if the page links are present
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About Us')).toBeInTheDocument();
    expect(screen.getByText('Contact Us')).toBeInTheDocument();
});

// TO DO: Test for navigation links

// TO DO: Test social media links