import Styled from 'styled-components';

export const Container = Styled.div`
  background: #eee;
  width: 50%;
  padding: 1%;
  border-radius: 15px;

  @media (max-width: 400px) {
    width: 70%; 
  }

  div {
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 20px 0;
  
    h1 {
      color: #444;
      margin-bottom: 2%;
    }

    span {
      font-size: 20px;
      color: #444;
      margin-bottom: 10px;
    }

    input {
      width: 60%;
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
    }
  }
`;

export const Buttons = Styled.div`
  display: flex;
  justify-content: center;

  button {
    width: 30%;
    height: 55px;
    padding: 2%;
    margin: 5px 3px;
    color: #fff;
    border: 0px;
    font-size: 20px;
    font-weight: bold;
    border-radius: 3px;
    cursor: pointer; 
  }

  .save {
    background: #008000;

    &:hover {
      background: #004d00;
    }
  }

  .back {
    background: #d3d3d3;

    &:hover {
      background: #6666;
    }

    * {
      text-decoration: none;
      color: #444;
    }
  }
`;
