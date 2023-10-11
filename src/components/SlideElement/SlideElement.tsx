import {
  SlideContainer,
  Slide,
  Title,
  Subtitle,
  CreatedAt,
  SlideContent,
} from "./SlideElement.Style";

interface ISlideElement {
  id: string;
  title: string;
  subtitle: string;
  created_at: string;
  url: string;
}

export default function SlideElement({
  title,
  subtitle,
  created_at,
  url,
}: Partial<ISlideElement>) {
  return (
    <SlideContainer>
      <Slide onClick={() => window.open(url, "_blank")}>
        <SlideContent>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
        </SlideContent>
        <CreatedAt>{created_at}</CreatedAt>
      </Slide>
    </SlideContainer>
  );
}
