import styled from "styled-components";

const SlideContainer = styled.div`
  background-color: #2d2d2d;
  width: 360px;
  /* padding: 0 1rem 0 1rem; */
  border-radius: 4px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  margin-bottom: 1rem;
  background-color: #202024;

  &:hover {
    transform: scale(1.03);
    background-color: #fff;
  }

  @media screen and (max-width: 490px) {
    width: 290px;
  }
`;

const Slide = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem 0 1rem;

  &:hover {
    &:nth-child(1) > :first-child {
      color: #242424;
      font-weight: 500;
    }

    &:nth-child(1) > :last-child {
      font-weight: 500;
    }
  }
`;

const Title = styled.p`
  color: white;
`;

const Subtitle = styled.p`
  font-size: 0.8rem;
  color: #8b8b8d;
`;

export { SlideContainer, Slide, Title, Subtitle };
