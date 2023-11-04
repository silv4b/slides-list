import styled from "styled-components";

const MaterialContainer = styled.div`
  background-color: #2d2d2d;
  width: 100%;
  cursor: pointer;
  margin-bottom: 1rem;
  background-color: #202024;
  border-radius: 4px;
  border: solid;
  border-color: #303030;
  border-width: 0.02rem;
  transition: 0.2s ease-in-out;

  &:hover {
    transform: scale(1.03);
    background-color: #fff;
  }

  @media screen and (max-width: 490px) {
    width: 290px;
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
      color: #242424;
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
  color: white;
  margin: 0;
`;

const Subtitle = styled.p`
  font-size: 0.8rem;
  text-align: left;
  color: #8b8b8d;
  margin: 0;
  padding-right: 1rem;
`;

const CreatedAt = styled.p`
  font-size: 0.8rem;
  color: #8b8b8d;
`;

export {
  MaterialContainer,
  Material,
  MaterialContent,
  Title,
  Subtitle,
  CreatedAt,
};
