import {
  SlideContainer,
  Slide,
  Title,
  Subtitle,
  PostedAt,
  SlideContent,
} from "./SlideElement.Style";

interface ISlideElement {
  title: string;
  subtitle: string;
  postedAt: string;
  link: string;
}

export default function SlideElement({
  title,
  subtitle,
  postedAt,
  link,
}: Partial<ISlideElement>) {
  return (
    <SlideContainer>
      <Slide onClick={() => window.open(link, "_blank")}>
        <SlideContent>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
        </SlideContent>
        <PostedAt>{postedAt}</PostedAt>
      </Slide>
    </SlideContainer>
  );
}
