import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Dragon from '../../components/Dragon';

import api from '../../services/api';

import dragon1 from '../../assets/dragon_1.svg';
import dragon2 from '../../assets/dragon_2.svg';
import dragon3 from '../../assets/dragon_3.svg';
import dragon4 from '../../assets/dragon_4.svg';
import dragon5 from '../../assets/dragon_5.svg';
import dragon6 from '../../assets/dragon_6.svg';
import dragon7 from '../../assets/dragon_7.svg';
import dragon8 from '../../assets/dragon_8.svg';

import { Container } from './styles';

const logos = [dragon1, dragon2, dragon3, dragon4, dragon5, dragon6, dragon7, dragon8];

const List = () => {
  const [dragons, setDragons] = useState([]);

  useEffect(() => {
    async function fetchDragons() {
      try {
        const { data } = await api.get('/dragon');

        setDragons(data);
      } catch (err) {
        toast.error('Occreu um erro ao buscar dragões.');
      }
    }

    fetchDragons();
  }, []);

  return (
    <Container>
      <ToastContainer />
      {dragons.map((dragon) => {
        const logo = logos[Math.floor(Math.random() * logos.length)];

        return <Dragon key={dragon.id} data={{ ...dragon, logo }} />;
      })}
    </Container>
  );
};

export default List;
