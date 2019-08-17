import React from 'react';
import PropTypes from 'prop-types';

import {
  Container, Header, Body, DragonImg,
} from './styles';

import Edit from '../../assets/white_edit1.png';
import Eye from '../../assets/white_eye1.png';
import Delete from '../../assets/white_delete1.png';

const Dragon = ({ data }) => (
  <Container>
    <Header>
      <DragonImg src={data.logo} alt="logo" />
    </Header>
    <Body>
      <span>{data.name}</span>
    </Body>
    <div>
      <button type="button" className="view">
        <img src={Eye} alt="visualizar" />
      </button>
      <button type="button" className="edit">
        <img src={Edit} alt="editar" />
      </button>
      <button type="button" className="delete">
        <img src={Delete} alt="deletar" />
      </button>
    </div>
  </Container>
);

Dragon.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    logo: PropTypes.node.isRequired,
  }).isRequired,
};

export default Dragon;
