import { Link } from "react-router-dom";
import MaterialList from "../MaterialListPage/MaterialList";
import { Container, Title, Subtitle, MyLink } from "./Main.Style";
import ScrollUpButton from "../../components/ScrollUpButtonComponent/ScrollUpButton";

export default function Main() {
  return (
    <Container>
      {/* Aplicar depois da implementação do Auth */}
      {/* <FloatingButton /> */}
      <ScrollUpButton />
      <Title>
        Posts - Materiais<Link to="/management">.</Link>
      </Title>
      <Subtitle>
        Materiais usados nas disciplinas de PEOO e Algoritmos.
      </Subtitle>
      <MaterialList />
      <div>
        <MyLink href="https://github.com/silv4bprof" target="_blank">
          Exemplos{" "}
        </MyLink>
        no Github.{" "}
      </div>
    </Container>
  );
}
