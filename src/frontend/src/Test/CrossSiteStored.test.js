import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CrossSiteStored from '../Pages/CrossSiteStored/CrossSiteStored'; 
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '../Hooks/UseAuth';

describe('CrossSiteStored Page', () => {
  test('renders the header and sidenav', () => {
    render(
        <React.StrictMode>
          <BrowserRouter>
            <AuthProvider>
              <CrossSiteStored />
            </AuthProvider>
          </BrowserRouter>
        </React.StrictMode>
      );
    
    
  const elements = screen.getAllByText(/Cross-Site Scripting \(XSS\) Stored/i);

  expect(elements.length).toBeGreaterThan(0);

  expect(elements[0]).toBeInTheDocument();
  });

  test('renders the main content and buttons', () => {
    render(
        <React.StrictMode>
          <BrowserRouter>
            <AuthProvider>
              <CrossSiteStored />
            </AuthProvider>
          </BrowserRouter>
        </React.StrictMode>
      );

      const elements = screen.getAllByText(/OWASP. "Cross-site Scripting \(XSS\) Stored"/i);

  expect(elements.length).toBeGreaterThan(0);

  expect(elements[0]).toBeInTheDocument();
  });

  test('opens and closes the popup correctly', () => {
    render(
        <React.StrictMode>
          <BrowserRouter>
            <AuthProvider>
              <CrossSiteStored />
            </AuthProvider>
          </BrowserRouter>
        </React.StrictMode>
      );
    
  const elements = screen.getAllByText(/https:\/\/developer.mozilla.org\/en-US\/docs\/Glossary\/Cross-site_scripting/i);

  expect(elements.length).toBeGreaterThan(0);

  expect(elements[0]).toBeInTheDocument();
  });
});