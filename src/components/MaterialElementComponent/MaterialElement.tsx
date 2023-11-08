import { format, zonedTimeToUtc } from "date-fns-tz";
import {
  MaterialContainer,
  Material,
  Title,
  Subtitle,
  CreatedAt,
  MaterialContent,
} from "./MaterialElement.Style";

interface IMaterialElement {
  id: number;
  title: string;
  subtitle: string;
  url: string;
  created_at: string;
}

export default function MaterialElement({
  id,
  title,
  subtitle,
  created_at,
  url,
}: Partial<IMaterialElement>) {
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
