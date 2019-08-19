import Styled from 'styled-components';

export const Container = Styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  margin: 2%;
  padding: 5px;
  background: #29a329;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.3s;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.6);

  img {
    width: 40px;
    height: 40px;
  }

  &:hover {
    transform: scale(1.1);
  }
`;
