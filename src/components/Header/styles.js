import Styled from 'styled-components';

export const Container = Styled.div`
  display: flex;
  justify-content: space-between;
  color: #fff;
  padding: 0 10px;
  background-color: #004d00;
  width: 100%;
  min-height: 50px;

  * {
    margin: 0 3%;
  }
`;

export const Image = Styled.img`
  width: 60px;
  height: 60px;
`;

export const Button = Styled.button`
  background: #004d00;
  border: #004d00;
  cursor: pointer;
`;

export const LoginArea = Styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 25px;
`;
