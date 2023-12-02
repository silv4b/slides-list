import styled from "styled-components";

const Container = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  margin: 0 0 1rem 0;
`;

const MyContainer = styled.div`
  display: grid;
  max-width: 1200px;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 0.6rem;
`;

export { Container, Title, MyContainer };
