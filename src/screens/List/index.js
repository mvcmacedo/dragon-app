import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import {
  sortBy,
  compose,
  toLower,
  prop,
} from 'ramda';

import 'react-toastify/dist/ReactToastify.css';

import api from '../../services/api';
import logos from '../../helpers/dragons';
import Dragon from '../../components/Dragon';

import { Container } from './styles';

const List = () => {
  const [dragons, setDragons] = useState([]);

  const fetchDragons = async () => {
    try {
      const { data } = await api.get('/dragon');

      const sortData = sortBy(compose(toLower, prop('name'))); // ordena por order alfabética

      setDragons(sortData(data));
    } catch (err) {
      toast.error('Occreu um erro ao buscar dragões.');
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/dragon/${id}`);

      fetchDragons();
    } catch (err) {
      toast.error(`Erro ao deletar dragão: ${id}`);
    }
  };

  useEffect(() => {
    fetchDragons();
  }, []);

  return (
    <Container>
      <ToastContainer />
      {dragons.map((dragon) => (
        <Dragon
          key={dragon.id}
          data={{
            ...dragon,
            logo: logos[Math.floor(Math.random() * logos.length)], // seleciona logo aleatória
            isDetail: false,
          }}
          handleDelete={handleDelete}
        />
      ))}
    </Container>
  );
};

export default List;
