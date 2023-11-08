import styled from "styled-components";

const LeftButtons = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 1rem;

  > a {
    padding: 6px 12px 6px 12px;
    font-weight: 400;
    border-radius: 4px;
    border-width: 0.02rem;
    transition: 0.2s ease-in-out;

    &:hover {
      color: #fff;
    }
  }
`;

const RightButtons = styled.div`
  > img {
    height: 40px;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  height: 40px;
  background-color: #111114;
  overflow: hidden;
  position: fixed; /* Mantém a navbar no topo da página */
  top: 0;
  width: 100%;
  padding: 1rem 0 1rem 0;
  box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.25);

  @media screen and (max-width: 375px) {
    > ${RightButtons} {
      display: none;
    }
  }
`;

const MyLink = styled.a``;

export { Container, LeftButtons, RightButtons, MyLink };
