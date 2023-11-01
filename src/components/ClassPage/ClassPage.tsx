import { useCallback, useEffect, useState } from "react";
import { Container, MyContainer } from "./ClassPageStyle";
import { ClassType } from "../../../types/collections";
import { selectMaterials } from "../../controllers/SelectController";
import ClassElement from "../ClassElement/ClassElement";

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
      <Container>
        <h1>Classes Page</h1>
        <MyContainer>
          {classes.map((turma) => (
            <ClassElement
              key={turma.id}
              codigo={turma.codigo}
              nome={turma.nome}
            />
          ))}
        </MyContainer>
      </Container>
    </>
  );
}
