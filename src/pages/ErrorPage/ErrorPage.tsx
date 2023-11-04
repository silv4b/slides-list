import { Container, Title, Subtitle } from "./ErrorPage.Style";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <Container>
      <Title>
        Erro<Link to="/">.</Link>
      </Title>
      <Subtitle>
        O caminho não existe ou não está disponível. Volte{" "}
        <Link to="/">Aqui</Link>.
      </Subtitle>
    </Container>
  );
}

// https://www.youtube.com/watch?v=3sQITRihW_A&t=584s
