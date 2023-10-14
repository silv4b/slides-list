import { Container, Title, Subtitle } from "./ManageSlides.Style";
import { Link } from "react-router-dom";

export default function ManageSlides() {
  return (
    <Container>
      <Title>Gerenciando Slides<Link to="/">.</Link></Title>
      <Subtitle>Página P/ Adicionar e Remover slides ao Supabase API</Subtitle>
      {/* Adicionar um componente de form para envidar dados para SupabaseSPI*/}
    </Container>
  );
}

// https://www.youtube.com/watch?v=3sQITRihW_A&t=584s
