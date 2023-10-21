import styled from "styled-components";

const ContainerRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  transition: 0.2s ease-in-out;

  @media screen and (max-width: 630px) {
    gap: 0;
    flex-direction: column;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  margin-bottom: 2rem;
  align-items: center;
`;

const Title = styled.h2`
  margin: 0;
`;

const Subtitle = styled.h3`
  margin: 1rem;
  color: gray;
  font-weight: 400;
`;

const InputData = styled.input`
  width: 16rem;
  height: 1rem;
  padding: 1em;
  margin: 0.5em 0 0.5em 0;
  border: none;
  border-radius: 0.2rem;
`;

const MyButton = styled.button`
  width: 100%;
  font-size: 1em;
  padding: 1rem;
  margin: 0.5em 0 0.5em 0;
  border: none;
  border-radius: 0.2rem;
`;

const Link = styled.a``;

export { Container, Title, Subtitle, Link, InputData, MyButton, ContainerRow };
