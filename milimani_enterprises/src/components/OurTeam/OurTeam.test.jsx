import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import OurTeam from './OurTeam';

describe('OurTeam', () => {
  it('renders without crashing', () => {
    render(<OurTeam />);
    expect(screen.getByText(/team/i)).toBeInTheDocument();
  });
});