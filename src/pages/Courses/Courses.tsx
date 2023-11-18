import { useCallback, useEffect, useState } from "react";

import { CourseType } from "../../../types/types";
import CourseElement from "../../components/CourseElement/CourseElement";
import Navbar from "../../components/Navbar/Navbar";
import { selectMaterials } from "../../controllers/SelectController";
import { ShowNotification } from "../../utils/ShowNotificationUtil";
import { Container, MyContainer, Title } from "./Courses.Style";

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
