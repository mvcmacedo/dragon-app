import React from 'react';
import { Link } from 'react-router-dom';

import PlusLogo from '../../assets/plus_2.svg';

import { Container } from './styles';

const AddButton = () => (
  <Container>
    <Link to="/criar"><img src={PlusLogo} alt="Adicionar" /></Link>
  </Container>
);

export default AddButton;
