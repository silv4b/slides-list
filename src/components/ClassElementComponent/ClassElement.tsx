import {
  Container,
  ButtonContainer,
  MyButton,
  Title,
  ClassCode,
} from "./ClassElement.Style";
import { SiGoogleclassroom, SiSanic } from "react-icons/si";
import { BsArrowRightCircle } from "react-icons/bs";

interface IClassType {
  id: number;
  nome: string;
  codigo: number;
  diario_url?: string;
  gsa_url?: string;
  created_at: string;
}

export default function ClassElement({
  codigo,
  nome,
  gsa_url,
  diario_url,
}: Partial<IClassType>) {
  return (
    <>
      <Container>
        <ClassCode>{codigo}</ClassCode>
        <Title>{nome}</Title>
        <ButtonContainer>
          <MyButton onClick={() => window.open(gsa_url, "_blank")}>
            <SiGoogleclassroom />
          </MyButton>
          <MyButton onClick={() => window.open(diario_url, "_blank")}>
            <SiSanic />
          </MyButton>
          <MyButton onClick={() => alert("Não implementado, ainda ...")}>
            <BsArrowRightCircle />
          </MyButton>
        </ButtonContainer>
      </Container>
    </>
  );
}
