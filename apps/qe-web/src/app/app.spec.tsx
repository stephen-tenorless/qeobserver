import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import App from './app';

describe('App', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'scrollTo', {
      value: vi.fn(),
      writable: true,
    });
  });

  it('should render successfully', () => {
    const { baseElement } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(baseElement).toBeTruthy();
  });

  it('should surface the qE hero messaging', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    expect(screen.getByText(/From observation to action/i)).toBeTruthy();
  });

  it('should include navigation links to the dedicated form pages', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    const earlyAccessLinks = screen.getAllByRole('link', {
      name: /Early Access/i,
    });
    const overviewLinks = screen.getAllByRole('link', {
      name: /Technical Overview/i,
    });
    const partnershipLinks = screen.getAllByRole('link', {
      name: /Partnerships/i,
    });

    expect(
      earlyAccessLinks.some(
        (link) => link.getAttribute('href') === '/early-access'
      )
    ).toBe(true);
    expect(
      overviewLinks.some(
        (link) => link.getAttribute('href') === '/technical-overview'
      )
    ).toBe(true);
    expect(
      partnershipLinks.some(
        (link) => link.getAttribute('href') === '/partnerships'
      )
    ).toBe(true);
  });
});
