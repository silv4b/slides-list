import { Link } from "react-router-dom";

import { Container, LeftButtons, RightButtons } from "./Navbar.Style";

export default function Navbar() {
  // Adicionar renderização das opções para cada role
  // Ex.: /management deve ser visível apenas por user admin (eu)
  return (
    <Container>
      <LeftButtons>
        <Link to="/materials">Materiais</Link>
        <Link to="/courses">Turmas</Link>
        <Link to="/management">Gerenciar</Link>
      </LeftButtons>
      <RightButtons>
        <img src="../../../src/assets/favicon.png" alt="icon" />
      </RightButtons>
    </Container>
  );
}
