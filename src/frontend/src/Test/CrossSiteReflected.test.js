import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';
import CrossSiteRflected from '../Pages/CrossSiteReflected/CrossSiteRflected';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '../Hooks/UseAuth';

describe('CrossSiteRflected Component', () => {

  it('should render header, sidenav, and main content', () => {
    render(
        <React.StrictMode>
          <BrowserRouter>
            <AuthProvider>
              <CrossSiteRflected />
            </AuthProvider>
          </BrowserRouter>
        </React.StrictMode>
      );
    
    expect(screen.getByText(/Vulnerabilidade: Cross-Site Scripting/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/User/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Message/i)).toBeInTheDocument();
  });

  it('should submit user and message and display the result', () => {
    render(
        <React.StrictMode>
          <BrowserRouter>
            <AuthProvider>
              <CrossSiteRflected />
            </AuthProvider>
          </BrowserRouter>
        </React.StrictMode>
      );

    fireEvent.change(screen.getByLabelText(/User/i), { target: { value: 'JohnDoe' } });
    fireEvent.change(screen.getByLabelText(/Message/i), { target: { value: 'Hello World' } });
    
    fireEvent.click(screen.getByText(/Submit/i));

    expect(screen.getByText(/User: JohnDoe/i)).toBeInTheDocument();
    expect(screen.getByText(/Message: Hello World/i)).toBeInTheDocument();
  });


  it('should render external links correctly', () => {
    render(
        <React.StrictMode>
          <BrowserRouter>
            <AuthProvider>
              <CrossSiteRflected />
            </AuthProvider>
          </BrowserRouter>
        </React.StrictMode>
      );
      const owaspLink = screen.getByText(/https:\/\/owasp.org\/www-community\/attacks\/xss/i);
      const portswiggerLink = screen.getByText(/https:\/\/portswigger.net\/web-security\/cross-site-scripting\/cheat-sheet/i);

      expect(owaspLink).toBeInTheDocument();
      expect(portswiggerLink).toBeInTheDocument();
  
      // Check if the links have correct href attributes
      expect(owaspLink).toHaveAttribute('href', 'https://owasp.org/www-community/attacks/xss/');
      expect(portswiggerLink).toHaveAttribute('href', 'https://portswigger.net/web-security/cross-site-scripting/cheat-sheet');
  });

});