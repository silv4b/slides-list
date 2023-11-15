import { useCallback, useEffect, useState } from "react";
import CourseElement from "../../components/CourseElementComponent/CourseElement";
import Navbar from "../../components/NavbarComponent/Navbar";
import { Container, Title, MyContainer } from "./CoursesPage.Style";
import { CourseType } from "../../../types/my_types";
import { selectMaterials } from "../../controllers/SelectController";
import { ShowNotification } from "../../Utils/ShowNotificationUtil";

export default function CoursesPage() {
  const [classes, setClasses] = useState<CourseType[]>([]);
  const fetcher = useCallback(async () => {
    selectMaterials("turmas", "id")
      .then((result) => {
        setClasses(result);
      })
      .catch((result) => {
        ShowNotification({
          title: "Notificação",
          content: result.message,
          time: 4000,
        });
      });
  }, []);

  useEffect(() => {
    fetcher();
  }, [fetcher]);

  return (
    <>
      <Navbar />
      <Container>
        <Title>Classes Page</Title>
        <MyContainer>
          {classes.map((turma) => (
            <CourseElement
              key={turma.id}
              id={turma.id}
              codigo={turma.codigo}
              nome={turma.nome}
              gsa_url={turma.gsa_url}
              diario_url={turma.diario_url}
            />
          ))}
        </MyContainer>
      </Container>
    </>
  );
}