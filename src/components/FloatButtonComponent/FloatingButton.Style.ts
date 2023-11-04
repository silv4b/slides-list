import styled from "styled-components";

const MyFloatingButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  background-color: #202024;
  border: solid;
  border-color: #303030;
  border-width: 0.02rem;
  border-radius: 50px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    transform: scale(1.03);
    background-color: #fff;
    color: #242424;
  }
`;

export { MyFloatingButton };
