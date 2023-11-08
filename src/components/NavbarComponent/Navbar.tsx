import { Container, LeftButtons, RightButtons } from "./Navbar.Style";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Container>
      <LeftButtons>
        <Link to="/materials">Materiais</Link>
        <Link to="/classes">Turmas</Link>
        <Link to="/management">Gerenciar</Link>
      </LeftButtons>
      <RightButtons>
        <img src="src\assets\favicon.png" alt="icon" />
      </RightButtons>
    </Container>
  );
}
