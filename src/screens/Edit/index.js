import React from 'react';

import DragonForm from '../../components/DragonForm';

import { Container } from './styles';

const Edit = ({ match }) => (
  <Container>
    <DragonForm id={match.params.id}/>
  </Container>
);

export default Edit;
