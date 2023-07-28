import styled from "styled-components";

const SlideContainer = styled.div`
  background-color: #2d2d2d;
  width: 300px;
  padding: 0 1rem 0 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.1s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }
`;

const Slide = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export { SlideContainer, Slide };
