import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 28rem;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 490px) {
    width: 290px;
  }
`;

const RowContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin-bottom: 1rem;

  @media screen and (max-width: 490px) {
    width: 290px;
  }
`;

const InputData = styled.input`
  width: 100%;
  height: 1rem;
  padding: 1em;
  margin: 0.5em 0 0.5em 0;
  background-color: #202024;
  border-radius: 4px;
  border: solid;
  border-color: #303030;
  border-width: 0.02rem;
`;

const MyButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  margin: 0.5em 0 0.5em 0;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  background-color: #202024;
  border-radius: 4px;
  border: solid;
  border-color: #303030;
  border-width: 0.02rem;

  &:hover {
    transform: scale(1.04);
    background-color: #fff;
    color: black;
  }
`;

export { InputData, RowContainer, Container, MyButton };
