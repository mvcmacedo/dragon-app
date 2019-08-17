import Styled from 'styled-components';

export const Container = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormContainer = Styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  max-width: 500px;
  margin: 4%;
  padding: 1%;
  background: #eee;
  border-radius: 15px;
  border: 2px solid #004d00;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

export const FormField = Styled.div`
  display: flex;
  justify-content: center;
  width: 100%;  
  margin: 2%;
  padding: 1%;
`;

export const FormInput = Styled.input`
  width: 100%;
  max-width: 400px;
  height: 50px;
  padding: 0px 20px;
  background: #fff;
  font-size: 18px;
  color: #444;
  border-radius: 3px;
  border: 1px solid #6666;
  text-align: center;

  @media(max-width: 400px) {
    font-size: 12px;
  }
`;

export const FormButton = Styled.button`
  width: 100%;
  max-width: 250px;
  height: 55px;
  padding: 2%;
  background: #008000;
  color: #fff;
  border: 0px;
  font-size: 20px;
  font-weight: bold;
  border-radius: 3px;
  cursor: pointer; 

  &:hover {
    background: #004d00;
  }
`;
