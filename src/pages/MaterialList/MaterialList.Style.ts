import styled from "styled-components";

import colors from "../../themes/colors";

const Container = styled.div`
  width: 100%;
  max-width: 28rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RowContainer = styled.div`
  width: 450px;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin-bottom: 1rem;

  @media screen and (max-width: 490px) {
    max-width: 300px;
    margin: 0.4rem 0.6rem 0.4rem 0.6rem;
  }
`;

const InputData = styled.input`
  width: 100%;
  height: 1rem;
  padding: 1em;
  margin: 0.5em 0 0.5em 0;
  background-color: ${colors.dark_gray_20};
  border-radius: 4px;
  border: solid;
  border-color: ${colors.border_color};
  border-width: 0.02rem;
`;

const MyButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  margin: 0.5em 0 0.5em 0;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  background-color: ${colors.dark_gray_20};
  border-radius: 4px;
  border: solid;
  border-color: ${colors.border_color};
  border-width: 0.02rem;

  &:hover {
    transform: scale(1.01);
    background-color: ${colors.white};
    color: ${colors.black};
  }
`;

export { InputData, RowContainer, Container, MyButton };
