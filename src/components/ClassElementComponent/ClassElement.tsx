import { Container, ButtonContainer, MyButton } from "./ClassElement.Style";
import { SiGoogleclassroom, SiSanic } from "react-icons/si";

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
        <p>{codigo}</p>
        <h3>{nome}</h3>
        <ButtonContainer>
          <MyButton onClick={() => window.open(gsa_url, "_blank")}>
            <SiGoogleclassroom />
          </MyButton>
          <MyButton onClick={() => window.open(diario_url, "_blank")}>
            <SiSanic />
          </MyButton>
        </ButtonContainer>
      </Container>
    </>
  );
}
