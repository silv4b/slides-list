import styled from "styled-components";

const Container = styled.div`
  background-color: #111114;
  overflow: hidden;
  position: fixed; /* Mantém a navbar no topo da página */
  top: 0;
  width: 100%;
  padding: 1rem 0 1rem 0;
  box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.25);
`;

const MyLinks = styled.div`
  display: flex;
  justify-content: space-around;

  > a {
    transition: 0.2s ease-in-out;
    &:hover {
      color: white;
    }
  }
`;

const MyLink = styled.a``;

export { Container, MyLinks, MyLink };
