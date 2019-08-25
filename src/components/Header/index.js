import React from 'react';

import {
  Container, Image, Button, LoginArea,
} from './styles';

import { isAuthenticated, logout, getUser } from '../../services/auth';

import logoutLogo from '../../assets/white_logout.svg';
import dragons from '../../assets/white_twodragons.svg';

const Header = () => (
  <Container>
    <div>
      <Image src={dragons} alt="left-logo" />
    </div>

    <div>
      {isAuthenticated() ? (
        <Button>
          <LoginArea>
            <span>{getUser()}</span>
            <Image src={logoutLogo} alt="Sair" onClick={() => logout()} />
          </LoginArea>
        </Button>
      ) : (
        <Image src={dragons} alt="right-logo" />
      )}
    </div>
  </Container>
);

export default Header;
