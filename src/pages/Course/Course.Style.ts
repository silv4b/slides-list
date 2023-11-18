import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
`;

const RowContainer = styled.div`
  width: 450px;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin-bottom: 1rem;

  @media screen and (max-width: 490px) {
    width: auto;
    margin: 0.4rem 0.6rem 0.4rem 0.6rem;
  }
`;

const MaterialContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  justify-items: center;
`;

const Title = styled.h2`
  text-align: center;
  margin-top: 1rem;
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

export { Container, RowContainer, MaterialContainer, Title, Subtitle };
