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
  text-align: center;

  @media screen and (max-width: 490px) {
    display: flex;
    justify-content: center;
  }
`;

const MyLink = styled.a``;

export { Container, Title, Subtitle, MyLink };
