import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { PostType } from "../../../types/collections";
import MaterialElement from "../../components/MaterialElement/MaterialElement";
import Navbar from "../../components/Navbar/Navbar";
import ScrollUpButton from "../../components/ScrollUpButton/ScrollUpButton";
import { selectMaterialByCourseId } from "../../controllers/SelectController";
import { ShowNotification } from "../../utils/ShowNotificationUtil";
import { Container, Subtitle, Title } from "./Course.Style";

export default function CoursePage() {
  const [materials, setMaterials] = useState<PostType[]>([]);
  const { courseCod } = useParams<{ courseCod: string }>();
  const courseCodNumber: number = parseInt(courseCod!);

  const fetcher = useCallback(async () => {
    selectMaterialByCourseId(courseCodNumber)
      .then((result) => {
        setMaterials(result);
      })
      .catch(() => {
        ShowNotification({
          title: "Notificação",
          content: `Erro ao recuperar materiais.`,
          time: 4000,
        });
      });
  }, [courseCodNumber]);

  useEffect(() => {
    fetcher();
  }, [fetcher]);

  return (
    <>
      <Navbar />
      <ScrollUpButton />
      <Container>
        <Title> Course Page</Title>
        <Subtitle>{courseCodNumber}</Subtitle>
        {materials.map((material) => (
          <MaterialElement
            key={material.id}
            id={material.id}
            title={material.title}
            subtitle={material.subtitle}
            created_at={material.created_at}
            url={material.url}
          />
        ))}
      </Container>
    </>
  );
}
