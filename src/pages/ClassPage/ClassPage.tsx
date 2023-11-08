import { useCallback, useEffect, useState } from "react";
import ClassElement from "../../components/ClassElementComponent/ClassElement";
import Navbar from "../../components/NavbarComponent/Navbar";
import { Container, MyContainer } from "./ClassPage.Style";
import { ClassType } from "../../../types/my_types";
import { selectMaterials } from "../../controllers/SelectController";

export default function ClassesPage() {
  const [classes, setClasses] = useState<ClassType[]>([]);
  const fetcher = useCallback(async () => {
    selectMaterials("turmas", "id").then((result) => {
      if (result == "error") {
        alert(`Erro ao recuperar turmas!`);
        console.error(result);
      } else {
        setClasses(result);
      }
    });
  }, []);

  useEffect(() => {
    fetcher();
  }, [fetcher]);

  return (
    <>
      <Navbar />
      <Container>
        <h1>Classes Page</h1>
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
