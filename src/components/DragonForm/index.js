import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import api from '../../services/api';

import { Container, Buttons } from './styles';

const DragonForm = ({ id }) => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [toHome, setToHome] = useState(false);

  useEffect(() => {
    async function findDragon() {
      const { data } = await api.get(`/dragon/${id}`);

      setName(data.name);
      setType(data.type);
    }

    if (id) {
      findDragon();
    }
  }, []);

  const handleSave = async () => {
    try {
      if (id) { // edit dragon
        await api.put(`/dragon/${id}`, { name, type });
      } else { // create dragon
        await api.post('/dragon', { name, type });
      }

      setToHome(true);
    } catch (error) {
      toast.error(`Erro ao ${id ? 'Editar ' : 'Criar '} Dragão`);
    }
  };

  return (
    <>
      { toHome && <Redirect to="/" />}

      <ToastContainer />
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
            onChange={(e) => setName(e.target.value)}
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
            onChange={(e) => setType(e.target.value)}
          />
        </div>
        <Buttons>
          <button type="button" className="save" onClick={handleSave}>Salvar</button>
          <button type="button" className="back"><Link to="/">Voltar</Link></button>
        </Buttons>
      </Container>
    </>
  );
};

DragonForm.propTypes = {
  id: PropTypes.string,
};

export default DragonForm;
