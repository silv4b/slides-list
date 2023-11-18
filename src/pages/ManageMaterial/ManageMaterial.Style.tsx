import styled from "styled-components";

import colors from "../../themes/colors";

const ContainerRow = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  gap: 1rem;
  justify-content: center;
  transition: 0.2s ease-in-out;

  @media screen and (max-width: 630px) {
    gap: 0;
    flex-direction: column-reverse;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  margin-bottom: 2rem;
  align-items: center;
`;

const Title = styled.h2`
  margin: 0;
`;

const Subtitle = styled.h3`
  margin: 1rem;
  color: ${colors.soft_gray_80};
  font-weight: 400;
`;

const InputData = styled.input`
  width: 16rem;
  height: 1rem;
  padding: 1em;
  margin: 0.5em 0 0.5em 0;
  background-color: ${colors.dark_gray_20};
  border-radius: 4px;
  border: solid;
  border-color: ${colors.border_color};
  border-width: 0.02rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 17.7rem;
  gap: 1rem;
  margin: 0;

  @media screen and (max-width: 630px) {
    flex-direction: column;
    gap: 0;
    align-items: center;
    width: 100%;
  }
`;

const MyButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 17.7rem;
  height: 1rem;
  padding: 1.3rem;
  align-items: center;
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

  @media screen and (max-width: 630px) {
    width: 17.7rem;
  }
`;

export {
  Container,
  Title,
  Subtitle,
  InputData,
  MyButton,
  ContainerRow,
  ButtonContainer,
};
