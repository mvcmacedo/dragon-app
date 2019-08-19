import React, { useState } from 'react';

import {
  Container, FormContainer, FormField, FormInput, FormButton,
} from './styles';

import { login } from '../../services/auth';

const Login = () => {
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    login(username);
  };

  return (
    <Container>
      <FormContainer>
        <FormField>
          <FormInput
            type="text"
            placeholder="Digite seu usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
