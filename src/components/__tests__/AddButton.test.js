import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import AddButton from '../AddButton';

describe('Add Button test', () => {
  afterEach(cleanup);

  it('Should render add button', () => {
    const { getByAltText } = render(
      <BrowserRouter>
        <AddButton />
      </BrowserRouter>,
    );

    expect(getByAltText('Adicionar')).toBeTruthy();
  });
});
