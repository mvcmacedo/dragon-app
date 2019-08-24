import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Loader from 'react-loader-spinner';
import { ToastContainer, toast } from 'react-toastify';


import 'react-toastify/dist/ReactToastify.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import api from '../../services/api';

import { Container, Buttons } from './styles';

const DragonForm = ({ id }) => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [toHome, setToHome] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setName('');
    setType('');

    async function findDragon() {
      try {
        const { data } = await api.get(`/dragon/${id}`);

        setName(data.name);
        setType(data.type);
        setLoading(false);
      } catch (err) {
        setToHome(true);
      }
    }

    if (!id) {
      setLoading(false);
    } else {
      findDragon();
    }
  }, [id]);

  const handleSave = async () => {
    setLoading(true);

    try {
      if (name === '' || type === '') {
        toast.warn('Nome ou tipo do dragão não informado.');

        setLoading(false);
        return;
      }

      if (!id) { // create dragon
        await api.post('/dragon', { name, type });
      } else { // edit dragon
        await api.put(`/dragon/${id}`, { name, type });
      }

      setToHome(true);
    } catch (error) {
      toast.error(`Erro ao ${id ? 'Editar ' : 'Criar '} Dragão`);

      setLoading(false);
    }
  };

  return (
    <>
      { toHome && <Redirect to="/" />}

      <ToastContainer />

      { loading
        ? <Loader type="Oval" color="#29a329" />
        : (
          <Container>
            <div>
              <h1>
                {id ? 'Editar ' : 'Criar '}
                Dragão
              </h1>
            </div>

            <div>
              <span>Nome</span>
            </div>

            <div>
              <input
                type="text"
                placeholder="Digite o nome"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </div>

            <div>
              <span>Tipo</span>
            </div>

            <div>
              <input
                type="text"
                placeholder="Digite o tipo"
                value={type}
                onChange={e => setType(e.target.value)}
              />
            </div>
            <Buttons>
              <button type="button" className="save" onClick={handleSave}>Salvar</button>
              <button type="button" className="back"><Link to="/">Voltar</Link></button>
            </Buttons>
          </Container>
        )}
    </>
  );
};

DragonForm.propTypes = {
  id: PropTypes.string,
};

DragonForm.defaultProps = {
  id: undefined,
};

export default DragonForm;
