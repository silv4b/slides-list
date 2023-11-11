import styled from "styled-components";
import colors from "../../Themes/colors";

const MyScrollUpButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  background-color: ${colors.dark_gray_20};
  border: solid;
  border-color: ${colors.border_color};
  border-width: 0.02rem;
  border-radius: 50px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  box-shadow: 0 0 6px 2px ${colors.box_shadow};
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    background-color: ${colors.white};
    color: ${colors.dark_gray_20};
  }
`;

export { MyScrollUpButton };
