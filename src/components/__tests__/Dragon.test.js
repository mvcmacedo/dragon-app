import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Dragon from '../Dragon';
import logo from '../../assets/dragon_1.svg';

describe('Dragon test', () => {
  afterEach(cleanup);

  const data = {
    id: '1',
    logo,
    name: 'test',
    type: 'test type',
    createdAt: '2019-01-01 12:00:00',
  };

  it('Should render dragon component (detail)', () => {
    localStorage.setItem('DRAGON_USER', 'test');

    const handleDelete = () => {};

    data.isDetail = true;

    const { getByAltText, getByText } = render(
      <BrowserRouter>
        <Dragon data={data} handleDelete={handleDelete} />
      </BrowserRouter>,
    );

    expect(getByText('test')).toBeTruthy();
    expect(getByText('Voltar')).toBeTruthy();
    expect(getByAltText('logo')).toBeTruthy();
    expect(getByText('test type')).toBeTruthy();
    expect(getByText('01/01/2019 12:00:00')).toBeTruthy();
  });

  it('Should render dragon component (list)', () => {
    localStorage.setItem('DRAGON_USER', 'test');

    data.isDetail = false;

    const { getByAltText, getByText } = render(
      <BrowserRouter>
        <Dragon data={data} />
      </BrowserRouter>,
    );

    expect(getByText('test')).toBeTruthy();
    expect(getByAltText('logo')).toBeTruthy();
    expect(getByAltText('visualizar')).toBeTruthy();
    expect(getByAltText('editar')).toBeTruthy();
    expect(getByAltText('deletar')).toBeTruthy();
  });
});
