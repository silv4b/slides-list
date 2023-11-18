import Navbar from "../../components/Navbar/Navbar";
import ScrollUpButton from "../../components/ScrollUpButton/ScrollUpButton";
import MaterialList from "../MaterialList/MaterialList";
import { Container, MyLink, Subtitle, Title } from "./Main.Style";

export default function Main() {
  return (
    <>
      <Navbar />
      <Container>
        {/* Aplicar depois da implementação do Auth */}
        {/* <FloatingButton /> */}
        <ScrollUpButton />
        <Title>
          Posts - Materiais
          {/* <Link to="/management">.</Link> */}
        </Title>
        <Subtitle>
          Materiais usados nas disciplinas de PEOO e Algoritmos.
        </Subtitle>
        <MaterialList />
        <div>
          <MyLink href="https://github.com/silv4bprof" target="_blank">
            Exemplos{" "}
          </MyLink>
          no Github.
        </div>
      </Container>
    </>
  );
}
