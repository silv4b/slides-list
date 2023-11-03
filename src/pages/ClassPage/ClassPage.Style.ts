import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  justify-content: center;
  align-items: center;
  background-color: grey;
  transition: 0.2s ease-in-out;
`;

// remover
const MyContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  background-color: grey;
  width: auto;
  max-width: 720px;
  transition: 0.2s ease-in-out;
`;

const Quadrado = styled.div`
  background-color: red;
  width: 200px;
  height: 100px;
  margin: 20px;
  transition: 0.2s ease-in-out;
`;
// remover

export { Container, Quadrado, MyContainer };
