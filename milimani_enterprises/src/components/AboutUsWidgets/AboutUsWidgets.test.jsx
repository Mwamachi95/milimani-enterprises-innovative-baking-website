import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AboutUsWidgets from './AboutUsWidgets';

beforeAll(() => {
  global.IntersectionObserver = class {
    constructor(callback) {}
    observe() {}
    unobserve() {}
    disconnect() {}
  };
});

test('renders about Us widget texts', ()=>{
    // Render the about us hero component
    render(<AboutUsWidgets />);

    // Renders all texts
    expect(screen.getByText(/Proudly supplying Rwanda with/i)).toBeInTheDocument();
    expect(screen.getByText(/first class/i)).toBeInTheDocument();
    expect(screen.getByText(/baking products/i)).toBeInTheDocument();
    expect(screen.getByText(/10\+/i)).toBeInTheDocument();
    expect(screen.getByText(/Years in business/i)).toBeInTheDocument();
    expect(screen.getByText(/100\+/i)).toBeInTheDocument();
    expect(screen.getByText(/Business supplied to/i)).toBeInTheDocument();
    expect(screen.getByText(/3/i)).toBeInTheDocument();
    expect(screen.getByText(/Nationaly recognised awards/i)).toBeInTheDocument();
    expect(screen.getByText(/20\+/i)).toBeInTheDocument();
    expect(screen.getByText(/Milimani employees/i)).toBeInTheDocument();
})