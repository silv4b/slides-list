import { Link } from "react-router-dom";
import { Container, Title, Subtitle } from "./Error.Style";

export default function ErrorPage() {
  return (
    <Container>
      <Title>
        Erro
      </Title>
      <Subtitle>
        O caminho não existe ou não está disponível. Volte{" "}
        <Link to="/">Aqui</Link>.
      </Subtitle>
    </Container>
  );
}

// https://www.youtube.com/watch?v=3sQITRihW_A&t=584s
