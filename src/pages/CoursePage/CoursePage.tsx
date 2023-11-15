import { useCallback, useEffect, useState } from "react";
import Navbar from "../../components/NavbarComponent/Navbar";
import { selectMaterialByCourseId } from "../../controllers/SelectController";
import { Container, Title } from "./CoursePage.Style";
import { useLocation } from "react-router-dom";
import { PostType } from "../../../types/collections";
import { ShowNotification } from "../../Utils/ShowNotificationUtil";
import MaterialElement from "../../components/MaterialElementComponent/MaterialElement";

export default function CoursePage() {
  const location = useLocation();
  const courseData = location.state;
  const [materials, setMaterials] = useState<PostType[]>([]);

  const fetcher = useCallback(async () => {
    selectMaterialByCourseId(courseData.id)
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
  }, [courseData.id]);

  useEffect(() => {
    fetcher();
  }, [fetcher]);

  return (
    <>
      <Navbar />
      <Container>
        <Title> Course Page</Title>
        <h3>
          {courseData.codigo} - {courseData.nome}
        </h3>
        {/* <MaterialContainer> */}
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
        {/* </MaterialContainer> */}
      </Container>
    </>
  );
}
