import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';

import App from '../App';

describe('List test', () => {
  it('Should render login screen (user not logged)', () => {
    const { getByText, getByPlaceholderText } = render(<App />);

    expect(localStorage.getItem).toHaveBeenCalled();
    expect(getByText('Entrar')).toBeTruthy();
    expect(getByPlaceholderText('Digite seu usuário')).toBeTruthy();
  });

  it('Should render header elements', () => {
    const { getByAltText } = render(<App />);

    expect(getByAltText('left-logo')).toBeTruthy();
    expect(getByAltText('right-logo')).toBeTruthy();
  });

  it('Should NOT login (without username)', () => {
    const { getByText, getByPlaceholderText } = render(<App />);

    fireEvent.click(getByText('Entrar'));

    expect(getByText('Entrar')).toBeTruthy();
    expect(getByPlaceholderText('Digite seu usuário')).toBeTruthy();
  });

  it('Should login', () => {
    let { getByText, getByPlaceholderText, getByAltText } = render(<App />);

    window.location.reload = jest.fn();

    fireEvent.change(getByPlaceholderText('Digite seu usuário'), { target: { value: 'test' } });
    fireEvent.click(getByText('Entrar'));

    cleanup();

    ({ getByText, getByPlaceholderText, getByAltText } = render(<App />));

    expect(getByText('test')).toBeTruthy();
    expect(getByAltText('Sair')).toBeTruthy();
    expect(getByAltText('Adicionar')).toBeTruthy();
    expect(localStorage.setItem).toHaveBeenCalledWith('DRAGON_USER', 'test');
  });

  it('Should logout', () => {
    localStorage.setItem('DRAGON_USER', 'test');

    let { getByText, getByPlaceholderText, getByAltText } = render(<App />);

    window.location.reload = jest.fn();

    expect(getByText('test')).toBeTruthy();
    expect(getByAltText('Sair')).toBeTruthy();
    expect(getByAltText('Adicionar')).toBeTruthy();

    fireEvent.click(getByAltText('Sair'));
    cleanup();

    ({ getByText, getByPlaceholderText, getByAltText } = render(<App />));

    expect(getByAltText('left-logo')).toBeTruthy();
    expect(getByAltText('right-logo')).toBeTruthy();
    expect(localStorage.removeItem).toHaveBeenCalled();
    expect(getByPlaceholderText('Digite seu usuário')).toBeTruthy();
  });
});
