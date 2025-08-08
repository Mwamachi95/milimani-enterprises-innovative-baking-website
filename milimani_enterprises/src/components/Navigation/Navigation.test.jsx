import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Navigation from './Navigation';

describe('Navigation', () => {
  it('renders without crashing', () => {
    render(<Navigation />);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });
});