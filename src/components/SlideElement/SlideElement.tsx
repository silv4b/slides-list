import { SlideContainer, Slide } from "./SlideElement.Style";

export default function SlideElement() {
  return (
    <>
      <SlideContainer onClick={() => window.open("www.google.com", "_blank")}>
        <Slide>
          <p>14_PEOO - POO - 3 🚀</p>
          <p>19/07/2023</p>
        </Slide>
      </SlideContainer>
    </>
  );
}
