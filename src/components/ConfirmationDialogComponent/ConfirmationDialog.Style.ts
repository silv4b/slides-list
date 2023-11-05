import styled from "styled-components";

const Overlay = styled.div`
  transition: 0.9s ease-in-out;
  position: fixed;
  z-index: 999999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

const DialogContent = styled.div`
  position: absolute;
  padding: 20px 30px 20px 30px;
  color: rgb(255, 255, 255);
  background: #202024;
  min-width: 16rem;
  border-radius: 8px;
  box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.25);
  overflow: auto;
  transition: 0.9s ease-in-out;
  left: 50%;
  top: 456px;
  transform: translate(-50%, -50%);
  z-index: 11 !important;
  background-color: #111114;
  border-radius: 4px;
  border: solid;
  border-color: #303030;
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
  background-color: #202024;
  border-radius: 4px;
  border: solid;
  border-color: #303030;
  border-width: 0.02rem;

  &:hover {
    transform: scale(1.04);
    background-color: #fff;
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
