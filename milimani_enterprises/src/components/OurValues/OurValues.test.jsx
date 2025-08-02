import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import OurValues from './OurValues';

describe('OurValues', () => {
  it('renders without crashing', () => {
    render(<OurValues />);
    expect(screen.getByText(/values/i)).toBeInTheDocument();
  });
});