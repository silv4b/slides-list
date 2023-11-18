import styled from "styled-components";

import colors from "../../themes/colors";

const MaterialContainer = styled.div`
  width: 100%;
  max-width: 450px;
  cursor: pointer;
  margin-bottom: 1rem;
  background-color: ${colors.dark_gray_20};
  border-radius: 4px;
  border: solid;
  border-color: ${colors.border_color};
  border-width: 0.02rem;
  transition: 0.2s ease-in-out;

  &:hover {
    transform: scale(1.01);
    background-color: ${colors.white};
  }

  @media screen and (max-width: 490px) {
    max-width: 300px;
    margin: 0.4rem 0.6rem 0.4rem 0.6rem !important;
  }
`;

const Material = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.4rem 1rem 0.4rem 1rem;

  &:hover {
    &:nth-child(1) > :first-child > :first-child {
      color: ${colors.dark_gray_24};
      font-weight: 500;
    }

    &:nth-child(1) > :last-child {
      font-weight: 500;
    }
  }
`;

const MaterialContent = styled.div`
  display: flex;
  min-width: 0;
  flex-direction: column;

  @media screen and (max-width: 490px) {
    &:first-child > :last-child {
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  }
`;

const Title = styled.p`
  text-align: left;
  color: ${colors.white};
  margin: 0;
`;

const Subtitle = styled.p`
  font-size: 0.8rem;
  text-align: left;
  color: ${colors.soft_gray_80};
  margin: 0;
  padding-right: 1rem;
`;

const CreatedAt = styled.p`
  font-size: 0.8rem;
  color: ${colors.soft_gray_80};
`;

export {
  MaterialContainer,
  Material,
  MaterialContent,
  Title,
  Subtitle,
  CreatedAt,
};
