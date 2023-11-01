import {
  SlideContainer,
  Slide,
  Title,
  Subtitle,
  CreatedAt,
  SlideContent,
} from "./MaterialElement.Style";

import { format, zonedTimeToUtc } from "date-fns-tz";

interface ISlideElement {
  id: number;
  title: string;
  subtitle: string;
  created_at: string;
  url: string;
}

export default function SlideElement({
  id,
  title,
  subtitle,
  created_at,
  url,
}: Partial<ISlideElement>) {
  const dataOriginal: string = created_at as string;
  const dataUTC = zonedTimeToUtc(dataOriginal, "UTC");
  const dataFormatada: string = format(dataUTC, "dd/MM/yyyy");

  return (
    <SlideContainer>
      <Slide onClick={() => window.open(url, "_blank")}>
        <SlideContent>
          <Title>{title}</Title>
          <Subtitle>
            {id} - {subtitle}
          </Subtitle>
        </SlideContent>
        <CreatedAt>{dataFormatada}</CreatedAt>
      </Slide>
    </SlideContainer>
  );
}