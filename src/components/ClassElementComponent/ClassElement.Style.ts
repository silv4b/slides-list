import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 360px;
  margin: 0.6rem;
  background-color: #202024;
  padding: 0.8rem;
  border-radius: 8px;
  max-width: 40rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const MyButton = styled.div`
  text-align: center;
  width: auto;
  padding: 0.4rem;
  font-size: 1.4rem;
  cursor: pointer;
  border: none;
  border-radius: 0.2rem;
`;

export { Container, MyButton, ButtonContainer };
