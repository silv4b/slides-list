import { Container, MyLinks } from "./Navbar.Style";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Container>
      <MyLinks>
        <Link to="/materials">Materiais</Link>
        <Link to="/classes">Turmas</Link>
        <Link to="/management">Gerenciar Materiais</Link>
      </MyLinks>
    </Container>
  );
}
