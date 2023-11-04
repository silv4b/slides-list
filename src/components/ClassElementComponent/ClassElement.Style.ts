import styled from "styled-components";

// mais seguro usar o partial para passagem de parâmetros opcionais
interface MyButtonProps {
  backgroundColor: string;
  hoverColor: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 290px;
  max-width: 360px !important;
  margin: 0.6rem;
  background-color: #202024;
  padding: 0.8rem;
  max-width: 40rem;
  border-radius: 4px;
  border: solid;
  border-color: #303030;
  border-width: 0.02rem;
  transition: 0.2s ease-in-out;

  &:hover {
    transform: scale(1.03);
    background-color: #fff;
    color: #202024;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const MyButton = styled.div<Partial<MyButtonProps>>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  text-align: center;
  font-size: 1.4rem;
  cursor: pointer;
  border: none;
  border-radius: 0.2rem;
  padding: 2px;
  background-color: ${(props) => props.backgroundColor};
  transition: 0.2s ease-in-out;

  &:hover {
    background-color: ${(props) => props.hoverColor};
  }

  /* colocar um hover depois */
`;

const Title = styled.h3`
  height: 3.4rem;
`;

const ClassCode = styled.p`
  margin: 0;
`;

export { Container, MyButton, ButtonContainer, Title, ClassCode };
