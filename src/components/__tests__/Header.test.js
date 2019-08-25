import React from 'react';

import {
  render,
  cleanup,
} from '@testing-library/react';

import Header from '../Header';

describe('Header test', () => {
  beforeEach(cleanup);

  it('Should render header (user not logged)', () => {
    const { getByAltText } = render(<Header />);

    expect(getByAltText('left-logo')).toBeTruthy();
    expect(getByAltText('right-logo')).toBeTruthy();
  });


  it('Should render header (user logged)', () => {
    localStorage.setItem('DRAGON_USER', 'test');

    const { getByAltText, getByText } = render(<Header />);

    expect(getByText('test')).toBeTruthy();
    expect(getByAltText('Sair')).toBeTruthy();
    expect(getByAltText('left-logo')).toBeTruthy();
  });
});
