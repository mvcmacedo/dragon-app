import React from 'react';

import {
  Container, Image, Button, LoginArea,
} from './styles';

import { isAuthenticated, logout, getUser } from '../../services/auth';

import logoutLogo from '../../assets/logout.svg';
import dragons from '../../assets/twodragons.svg';

const Header = () => (
  <Container>
    <div>
      <Image src={dragons} alt="Logo" />
    </div>

    <div>
      <h1>My Dragons</h1>
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
        <Image src={dragons} alt="Logo" />
      )}
    </div>
  </Container>
);

export default Header;
