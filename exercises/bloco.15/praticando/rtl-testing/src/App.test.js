    // App.test.js
    import React from 'react';
    import { render } from '@testing-library/react';
    import App from './App';
    
    test('Verificando se existe o campo Email', () => {

      // Selecionando Elementos 
      const { getByLabelText } = render(<App />);
      const inputEmail = getByLabelText('Email');

      // Testando Elementos
      expect(inputEmail).toBeInTheDocument();
      expect(inputEmail.type).toBe('email');
    });