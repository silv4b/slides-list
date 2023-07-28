import { SlideContainer, Slide } from "./SlideElement.Style";

interface ISlideElement {
  title: string;
  postedAt: string;
  link: string;
}

export default function SlideElement({
  title,
  postedAt,
  link,
}: Partial<ISlideElement>) {
  return (
    <SlideContainer onClick={() => window.open("www.google.com", "_blank")}>
      <Slide onClick={() => window.open(link, "_blank")}>
        <p>{title}</p>
        <p>{postedAt}</p>
      </Slide>
    </SlideContainer>
  );
}
