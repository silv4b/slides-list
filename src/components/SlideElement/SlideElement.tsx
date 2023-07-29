import { SlideContainer, Slide, Title, Subtitle } from "./SlideElement.Style";

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
    <SlideContainer>
      <Slide onClick={() => window.open(link, "_blank")}>
        <Title>{title}</Title>
        <Subtitle>{postedAt}</Subtitle>
      </Slide>
    </SlideContainer>
  );
}
