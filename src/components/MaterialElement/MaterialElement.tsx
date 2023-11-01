import {
  MaterialContainer,
  Material,
  Title,
  Subtitle,
  CreatedAt,
  MaterialContent,
} from "./MaterialElement.Style";

import { format, zonedTimeToUtc } from "date-fns-tz";

interface ISlideElement {
  id: number;
  title: string;
  subtitle: string;
  created_at: string;
  url: string;
}

export default function MaterialElement({
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
    <MaterialContainer>
      <Material onClick={() => window.open(url, "_blank")}>
        <MaterialContent>
          <Title>{title}</Title>
          <Subtitle>
            {id} - {subtitle}
          </Subtitle>
        </MaterialContent>
        <CreatedAt>{dataFormatada}</CreatedAt>
      </Material>
    </MaterialContainer>
  );
}
