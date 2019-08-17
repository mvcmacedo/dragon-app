import Styled from 'styled-components';

export const Container = Styled.div`
  display: flex;
  justify-content: space-between;
  color: #fff;
  padding: 1%;
  background-color: #004d00;
  width: 100%;
  min-height: 50px;
`;

export const Image = Styled.img`
  width: 50px;
  height: 50px;
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
