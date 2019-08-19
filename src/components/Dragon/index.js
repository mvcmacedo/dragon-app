import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import {
  Container, Header, Body, DragonImg,
} from './styles';

import Edit from '../../assets/white_edit1.png';
import Eye from '../../assets/white_eye1.png';
import Delete from '../../assets/white_delete1.png';


const Dragon = ({ data, handleDelete }) => (
  <Container>
    <Header>
      <DragonImg src={data.logo} alt="logo" />
    </Header>
    <Body>
      <span>{data.name}</span>
    </Body>
    {data.isDetail && (
      <>
        <Body>
          <>
            <span>Tipo:</span>
            <span>{data.type}</span>
          </>
        </Body>
        <Body>
          <>
            <span>Criado em:</span>
            <span>{moment(data.createdAt).format('DD/MM/YYYY hh:mm:ss')}</span>
          </>
        </Body>
      </>
    )}
    <div>
      {data.isDetail ? (
        <button type="button" className="back">
          <Link to="/" style={{ textDecoration: 'none', color: '#fff' }}>
            Voltar
          </Link>
        </button>
      ) : (
        <>
          <button type="button" className="view">
            <Link to={`/detalhe/${data.id}`}>
              <img src={Eye} alt="visualizar" />
            </Link>
          </button>
          <button type="button" className="edit">
            <Link to={`/editar/${data.id}`}>
              <img src={Edit} alt="editar" />
            </Link>
          </button>
          <button type="button" className="delete" onClick={() => handleDelete(data.id)}>
            <img src={Delete} alt="deletar" />
          </button>
        </>
      )}
    </div>
  </Container>
);

Dragon.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    createdAt: PropTypes.string,
    isDetail: PropTypes.bool,
    logo: PropTypes.node.isRequired,
  }).isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default Dragon;
