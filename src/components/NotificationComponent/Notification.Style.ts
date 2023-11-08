import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #202024;
  border-radius: 4px;
  border: solid;
  border-color: #303030;
  border-width: 0.02rem;
`;

const Title = styled.p`
  padding: 0 20px 0 20px;
  margin: 6px 0 6px 0;
  font-size: small;
  color: gray;
`;

const Content = styled.p`
  padding: 0 20px 0 20px;
  margin: 10px 0 10px 0;
`;

export { Container, Title, Content };
