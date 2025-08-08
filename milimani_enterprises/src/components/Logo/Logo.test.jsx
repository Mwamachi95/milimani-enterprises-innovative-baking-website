import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Logo from './Logo';

describe('Logo', () => {
  it('renders without crashing', () => {
    render(<Logo />);
    expect(screen.getByAltText(/milimani enterprises logo/i)).toBeInTheDocument();
  });

  it('renders with custom alt text', () => {
    render(<Logo alt="Custom Logo" />);
    expect(screen.getByAltText('Custom Logo')).toBeInTheDocument();
  });
});