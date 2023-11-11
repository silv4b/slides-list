import { useCallback, useEffect, useState } from "react";
import ClassElement from "../../components/ClassElementComponent/ClassElement";
import Navbar from "../../components/NavbarComponent/Navbar";
import { Container, Title, MyContainer } from "./ClassPage.Style";
import { ClassType } from "../../../types/my_types";
import { selectMaterials } from "../../controllers/SelectController";
import { ShowNotification } from "../../Utils/ShowNotificationUtil";

export default function ClassesPage() {
  const [classes, setClasses] = useState<ClassType[]>([]);
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
            <ClassElement
              key={turma.id}
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
