import { format, zonedTimeToUtc } from "date-fns-tz";

import { IMaterialElement } from "../../../types/interfaces";
import { CreatedAt, Material, MaterialContainer, MaterialContent, Subtitle, Title } from "./MaterialElement.Style";

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

  const handleOpenNewTab = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <MaterialContainer>
      <Material onClick={() => handleOpenNewTab(url!)}>
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
