import Styled from 'styled-components';

export const Container = Styled.div`
  display: flex;
  justify-content: space-between;
  color: #fff;
  padding: 0 10px;
  background-color: #444;
  width: 100%;
  min-height: 60px;

  * {
    padding: 0 5%;
  }
`;

export const Image = Styled.img`
  width: 60px;
  height: 60px;
`;

export const Button = Styled.button`
  background: #444;
  border: #444;
  cursor: pointer;
`;

export const LoginArea = Styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
  color: #eee;
`;
