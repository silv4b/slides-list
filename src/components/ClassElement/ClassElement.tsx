import { Container } from "./ClassElement.Style";

interface IClassType {
  codigo: number;
  created_at: string;
  diario_url: string | null;
  gsa_url: string | null;
  id: number;
  nome: string;
}

export default function ClassElement({ codigo, nome }: Partial<IClassType>) {
  return (
    <>
      <Container>
        <p>{codigo} - {nome}</p>
      </Container>
    </>
  );
}
