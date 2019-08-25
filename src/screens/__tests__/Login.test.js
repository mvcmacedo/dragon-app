import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';

import Login from '../Login';

describe('Login test', () => {
  it('Should display login form', () => {
    const { getByText, getByPlaceholderText } = render(<Login />);

    expect(getByText('Entrar')).toBeTruthy();
    expect(getByPlaceholderText('Digite seu usuário')).toBeTruthy();
  });

  it('Should NOT login', () => {
    const { getByText } = render(<Login />);

    fireEvent.click(getByText('Entrar'));

    cleanup();

    expect(localStorage.setItem).not.toHaveBeenCalled();
  });

  it('Should login', () => {
    const { getByText, getByPlaceholderText } = render(<Login />);

    window.location.reload = jest.fn();

    fireEvent.change(getByPlaceholderText('Digite seu usuário'), { target: { value: 'test' } });
    fireEvent.click(getByText('Entrar'));

    expect(localStorage.setItem).toHaveBeenCalledWith('DRAGON_USER', 'test');
  });
});
