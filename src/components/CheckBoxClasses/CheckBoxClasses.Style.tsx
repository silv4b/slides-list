import styled from "styled-components";

import colors from "../../themes/colors";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* margin-top: 2rem;
  margin-bottom: 2rem; */
  align-items: center;
  /* background-color: red; */
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
export { Container, InputData };
