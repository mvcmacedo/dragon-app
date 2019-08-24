import React, { useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import {
  Container, FormContainer, FormField, FormInput, FormButton,
} from './styles';

import { login } from '../../services/auth';

const Login = () => {
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    if (username === '') {
      toast.warn('Digite um usuário.');

      return;
    }

    login(username);
  };

  const keyPressed = (event) => {
    if (event.key === 'Enter') {
      handleLogin(username);
    }
  };

  return (
    <Container>
      <ToastContainer />
      <FormContainer>
        <FormField>
          <FormInput
            type="text"
            placeholder="Digite seu usuário"
            value={username}
            onChange={e => setUsername(e.target.value)}
            onKeyPress={keyPressed}
          />
        </FormField>
        <FormField>
          <FormButton type="button" onClick={handleLogin}>
            Entrar
          </FormButton>
        </FormField>
      </FormContainer>
    </Container>
  );
};

export default Login;
