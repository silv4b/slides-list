import SlideList from "../SlideList/SlideList";
import { Title, Subtitle, Link } from "./Main.Style";

export default function Main() {
  return (
    <>
      <Title>Lista de Slides</Title>
      <Subtitle>2º Bimestre</Subtitle>
      <SlideList />
      <div>
        <Link href="https://github.com/silv4b/IFRN-exemplos" target="_blank">
          Exemplos{" "}
        </Link>
        no Github. {" "}
        <Link href="https://classroom.google.com/u/1/c/NTUyOTAyNTUwMjY3" target="_blank">
          Turma{" "}
        </Link> no GSA.
      </div>
    </>
  );
}
