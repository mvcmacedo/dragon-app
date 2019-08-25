import React from 'react';

import {
  render,
  cleanup,
  waitForElement,
} from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';
import MockAdapter from 'axios-mock-adapter';

import api from '../../services/api';
import DragonForm from '../DragonForm';

const mockApi = new MockAdapter(api);

describe('Dragon Form test', () => {
  beforeEach(cleanup);

  it('Should render dragon form (create)', () => {
    const { getByText, getByPlaceholderText } = render(
      <BrowserRouter>
        <DragonForm />
      </BrowserRouter>,
    );

    expect(getByText('Nome')).toBeTruthy();
    expect(getByText('Salvar')).toBeTruthy();
    expect(getByText('Voltar')).toBeTruthy();
    expect(getByText('Criar Dragão')).toBeTruthy();
    expect(getByPlaceholderText('Digite o nome')).toBeTruthy();
    expect(getByPlaceholderText('Digite o tipo')).toBeTruthy();
  });

  it('Should render dragon form (edit)', async () => {
    mockApi.onGet('/dragon/1')
      .reply(
        200,
        { data: { name: 'test', type: 'test type', createdAt: '2019-01-01 10:00:00' } },
      );

    const flushPromises = () => new Promise((resolve) => setTimeout(resolve));

    const { getByText } = render(
      <BrowserRouter>
        <DragonForm id="1" />
      </BrowserRouter>,
    );

    await waitForElement(() => getByText('Nome'));
    await flushPromises();

    expect(mockApi.history.get[0].url).toBe(`${process.env.REACT_APP_API_URL}/dragon/1`);
  });
});
