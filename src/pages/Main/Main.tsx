import MaterialList from "../MaterialList/MaterialList";
import ScrollUpButton from "../../components/ScrollUpButton/ScrollUpButton";
import Navbar from "../../components/Navbar/Navbar";
import { Container, Title, Subtitle, MyLink } from "./Main.Style";

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
