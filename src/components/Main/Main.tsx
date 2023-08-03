import SlideList from "../SlideList/SlideList";
import { Title, Subtitle } from "./Main.Style";

export default function Main() {
  return (
    <>
      <Title>Lista de Slides</Title>
      <Subtitle>2º Bimestre</Subtitle>
      <SlideList />
      <div>
        Exemplos no Github,&#32;
        <a href="https://github.com/silv4b/IFRN-exemplos" target="_blank">
          clique aqui
        </a>
        .
      </div>
    </>
  );
}
