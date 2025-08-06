import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ContactForm from './ContactForm';

test("renders all the texts", () => {
    // Render the contacts us component
    render(<ContactForm />);
    // Renders let/s talk title
    expect(screen.getByText(/Let's/i)).toBeInTheDocument();
    expect(screen.getByText(/Talk/i)).toBeInTheDocument();
    // Renders the description
    expect(screen.getByText(/We’re Rwanda’s trusted partner in baking—supplying bold bakers and food businesses with quality ingredients and tools that deliver results. From product to plate, we help you mix it, perfect it, and scale it—again and again./i)).toBeInTheDocument();
})