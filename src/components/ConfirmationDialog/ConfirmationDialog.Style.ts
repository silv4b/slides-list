import styled from "styled-components";
import colors from "../../themes/colors";

const Overlay = styled.div`
  transition: 0.9s ease-in-out;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${colors.box_shadow};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

const DialogContent = styled.div`
  position: absolute;
  padding: 20px 30px 20px 30px;
  color: ${colors.white};
  background: ${colors.background_color};
  min-width: 16rem;
  border-radius: 8px;
  box-shadow: 0 0 30px 0 ${colors.box_shadow};
  overflow: auto;
  transition: 0.9s ease-in-out;
  left: 50%;
  top: 456px;
  transform: translate(-50%, -50%);
  z-index: 11 !important;
  border-radius: 4px;
  border: solid;
  border-color: ${colors.border_color};
  border-width: 0.02rem;

  @media screen and (max-width: 630px) {
    min-width: 0;
    padding: 10px 30px 10px 30px;
    width: 230px !important;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 2rem;
`;

const MyButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
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
    color: black;
  }
`;

const MyButtonLink = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 1rem;
  padding: 1.3rem;
  align-items: center;
  margin: 0.5em 0 0.5em 0;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  background: none;
  border: none;
`;

export { Overlay, DialogContent, ButtonContainer, MyButton, MyButtonLink };
