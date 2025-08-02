import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import AboutUsHero from './AboutUsHero';

describe('AboutUsHero', () => {
  it('renders without crashing', () => {
    render(<AboutUsHero />);
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });
});