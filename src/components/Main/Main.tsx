import { Link } from "react-router-dom";
import SlideList from "../MaterialList/MaterialList";
import { Container, Title, Subtitle, MyLink } from "./Main.Style";

export default function Main() {
  return (
    <Container>
      {/* Aplicar depois da implementação do Auth */}
      {/* <FloatingButton/> */}
      <Title>
        Lista de Slides<Link to="/manage-material">.</Link>
      </Title>
      <Subtitle>Slides usados nas disciplinas de PEOO e Algoritmos.</Subtitle>
      <SlideList />
      <div>
        <MyLink href="https://github.com/silv4bprof" target="_blank">
          Exemplos{" "}
        </MyLink>
        no Github.{" "}
      </div>
    </Container>
  );
}
