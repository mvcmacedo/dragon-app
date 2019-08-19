import Styled from 'styled-components';

export const Container = Styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 20%;
  margin: 2%;
  background: #f2f2f2;
  border-radius: 15px;
  transition: transform 0.5s;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: scale(1.1);
  }

  @media(min-width: 1400px) {
    width: 15%;
  }

  @media(max-width: 940px) {
    width: 40%;
  }

  @media(max-width: 562px) {
    width: 45%;
  }

  @media(max-width: 400px) {
    width: 70%;
  }

  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    font-size: 20px;
    margin: 4%;
    padding: 2%;

    @media(max-width: 562px) {  
      font-size: 12px;
    }

    * {
      margin: 1.5%;
    }

    button {
      width: 45px;
      height: 45px;
      transition: transform 0.1s;
      border-radius: 5px;
      border: none;
      padding: 2px;
      cursor: pointer;

      &:hover {
        transform: scale(1.1);
      }

      img {
        width: 30px;
        height: 30px;
      }
    }

    .edit {
        background: #0099ff;
      }

      .view {
        background: #33cc33;
      }

      .back {
        background: #33cc33;
        width: 65px;
        height: 45px;
        font-size: 15px;
        font-weight: bold;
        color: #fff;
      }

      .delete {
        background: #cc0000;
      }
  }
`;

export const Header = Styled.div`
  background: #29a329;
  border-radius: 15px;
`;

export const Body = Styled.div`
  background: #d3d3d3;
  border-radius: 15px;

  span {
      font-weight: bold;
      color: #333333;
      font-size: 16px;
    }
`;

export const DragonImg = Styled.img`
  width: 100px;
  height: 100px;

  @media(max-width: 562px) {  
    width: 70px;
  }
`;
