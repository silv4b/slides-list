import { useCallback, useEffect, useState } from "react";
import Navbar from "../../components/NavbarComponent/Navbar";
import { selectMaterialByCourseId } from "../../controllers/SelectController";
import { Container, Title } from "./CoursePage.Style";
import { useParams } from "react-router-dom";
import { PostType } from "../../../types/collections";
import { ShowNotification } from "../../Utils/ShowNotificationUtil";
import MaterialElement from "../../components/MaterialElementComponent/MaterialElement";

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
      <Container>
        <Title> Course Page</Title>
        <h3>
          {/* {courseData.codigo} - {courseData.nome} */}
          {courseCodNumber}
        </h3>
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
