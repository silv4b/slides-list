import styled from "styled-components";

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
  width: 100%;
  padding: 1em;
  margin: 0.5em 0 0.5em 0;
  border: none;
  border-radius: 0.2rem;
`;

const MyButton = styled.button`
  width: 100%;
  font-size: 1em;
  margin: 1em 0 1em 0;
  padding: 1rem;
  border: none;
  border-radius: 0.2rem;
`;

const Link = styled.a``;

export { Container, Title, Subtitle, Link, InputData, MyButton };
