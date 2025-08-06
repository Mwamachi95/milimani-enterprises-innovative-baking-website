import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Slideshow from './Slideshow';

test('clicking next and back shows the correct slides and background image', async () => {
    render(<Slideshow />);
    const backgroundDiv = screen.getByTestId('slide-background');
    // Check initial background image
    expect(backgroundDiv).toHaveStyle(`background-image: url(products.jpg)`);
    // Click next
    const nextButton = screen.getByAltText(/Next/i);
    fireEvent.click(nextButton);
    // Wait for transition
    await waitFor(() =>
        expect(screen.queryByText(/Quality Products/i)).not.toBeInTheDocument(),
    );
    // Check description is not there
    expect(screen.queryByText(/Supplying fresh, reliable, and affordable baking ingredients and tools to help bakers create their best work—every time. Trusted by home bakers and professionals alike./i)).not.toBeInTheDocument(),
    // Check next slide content
    expect(screen.getByText(/Customer Success/i)).toBeInTheDocument();
    expect(screen.getByText(/We are committed to ensuring our customers achieve their desired outcomes with our products./i)).toBeInTheDocument();
    expect(backgroundDiv).toHaveStyle(`background-image: url(customerService.jpg)`);
    // Click back
    const prevButton = screen.getByAltText(/Previous/i);
    fireEvent.click(prevButton);
    // Wait for transition back
    await waitFor(() =>
        expect(screen.getByText(/Quality Products/i)).toBeInTheDocument()
    );
    // Check initial description is back
    expect(screen.queryByText(/Supplying fresh, reliable, and affordable baking ingredients and tools to help bakers create their best work—every time. Trusted by home bakers and professionals alike./i)).toBeInTheDocument(),
    // Check initial background again
    expect(backgroundDiv).toHaveStyle(`background-image: url(products.jpg)`);
});
