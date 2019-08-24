import React from 'react';
import PropTypes from 'prop-types';

import DragonForm from '../../components/DragonForm';

import { Container } from './styles';

const CreateOrEdit = ({ match }) => {
  const { id } = match.params;

  return (
    <Container>
      <DragonForm id={id} />
    </Container>
  );
};

CreateOrEdit.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

CreateOrEdit.defaultProps = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: undefined,
    }),
  }),
};

export default CreateOrEdit;
