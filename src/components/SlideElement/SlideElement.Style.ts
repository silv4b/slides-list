import styled from "styled-components";

const SlideContainer = styled.div`
  background-color: #2d2d2d;
  width: 330px;
  padding: 0 1rem 0 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  margin-bottom: 10px;
  background-color: #202024;

  &:hover {
    transform: scale(1.03);
  }
`;

const Slide = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Title = styled.p`
    color: white;
`
const Subtitle = styled.p`
    color: #8b8b8d;
`

export { SlideContainer, Slide, Title, Subtitle };
