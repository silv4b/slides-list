import SlideList from "../SlideList/SlideList";
import { Container, Title, Subtitle, Link } from "./Main.Style";

export default function Main() {
  return (
    <Container>
      <Title>Lista de Slides</Title>
      <Subtitle>Slides usados nas disciplinas de PEOO e Algoritmos.</Subtitle>
      <SlideList />
      <div>
        <Link href="https://github.com/silv4b/IFRN-exemplos" target="_blank">
          Exemplos{" "}
        </Link>
        no Github.{" "}
      </div>
    </Container>
  );
}
