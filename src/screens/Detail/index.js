/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import Loader from 'react-loader-spinner';

import 'react-toastify/dist/ReactToastify.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import Dragon from '../../components/Dragon';

import api from '../../services/api';

import logos from '../../helpers/dragons';

import { Container, LoaderContainer } from './styles';

const Detail = ({ match }) => {
  const [dragon, setDragon] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const logo = logos[Math.floor(Math.random() * logos.length)]; // logo dragão aleatória

  useEffect(() => {
    async function findDragon() {
      try {
        const { data } = await api.get(`/dragon/${match.params.id}`);
        
        setDragon(data);
      } catch (err) {
        setError(true);

        toast.error(`Erro ao buscar dragão: ${match.params.id}`);
      } finally {
        setLoading(false);
      }
    }

    findDragon();
  }, []);

  return (
    <Container>
      <ToastContainer />
      {error && <Redirect to="/" />}
      {loading ? (
        <LoaderContainer>
          <Loader type="Oval" color="#29a329" />
        </LoaderContainer>
      ) : (
        <Dragon data={{ ...dragon, logo, isDetail: true }} />
      )}
    </Container>
  );
};

export default Detail;
