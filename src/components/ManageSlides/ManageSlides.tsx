import { useState } from "react";
import {
  Container,
  ContainerRow,
  Title,
  Subtitle,
  InputData,
  MyButton,
} from "./ManageSlides.Style";
import { Link } from "react-router-dom";
import { SlideType } from "../../../types/slide";
import { insertSlide } from "../../controllers/slide/InsertController";
import { deleteSlide } from "../../controllers/slide/DeleteController";

export default function ManageSlides() {
  const [formSlide, setFormSlide] = useState<SlideType>({
    title: "",
    subtitle: "",
    url: "",
  });

  const [idToDelete, setIdToDelete] = useState<number | undefined>(undefined);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Decomposição
    const { name, value } = e.target;
    console.log(e.target);
    setFormSlide((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleClearForm = () => {
    setFormSlide({
      title: "",
      subtitle: "",
      url: "",
    });
    setIdToDelete(undefined);
  };

  const handleInsertData = async () => {
    if (
      formSlide.title == "" ||
      formSlide.subtitle == "" ||
      formSlide.url == ""
    ) {
      alert("Erro ao inserir dados no Supabase: Campo(s) vazios!");
    } else {
      insertSlide("slides", {
        title: formSlide.title,
        subtitle: formSlide.subtitle,
        url: formSlide.url,
      })
        .then((result) => {
          console.log(result);
          alert(`Dados inseridos corretamente no Supabase: ${result}`);
        })
        .catch((error) => {
          alert(`Erro ao inserir dados no Supabase: ${error.message}`);
        });
    }
    handleClearForm();
  };

  const handleRemoveData = async () => {
    if (idToDelete == undefined) {
      alert("Erro ao remover slide do banco de dados: Campo(s) vazios!");
      handleClearForm();
    } else {
      deleteSlide("slides", idToDelete).then((result) => {
        if (result == true) {
          alert(`Slide Nº ${idToDelete} foi removido com sucesso!`);
        } else {
          alert(`Slide Nº ${idToDelete} não existe!`);
        }
        handleClearForm();
      });
    }
  };

  return (
    <>
      <ContainerRow>
        <Container>
          <Title>
            Adicionar Slides<Link to="/">.</Link>
          </Title>
          <Subtitle>Adicionar Slides</Subtitle>

          <InputData
            type="text"
            placeholder="Título"
            name="title"
            value={formSlide.title}
            onChange={handleChange}
          />
          <InputData
            type="text"
            placeholder="Subtítulo"
            name="subtitle"
            value={formSlide.subtitle}
            onChange={handleChange}
          />
          <InputData
            type="text"
            placeholder="URL"
            name="url"
            value={formSlide.url}
            onChange={handleChange}
          />

          <MyButton onClick={handleInsertData}>Adicionar Slide</MyButton>
        </Container>

        <Container>
          <Title>Remover Slides</Title>
          <Subtitle>Remova slides usando ID</Subtitle>
          <InputData
            type="number"
            placeholder="Identificador"
            name="identificador"
            value={idToDelete || ""}
            onChange={(e) =>
              setIdToDelete(parseInt(e.target.value) || undefined)
            }
          />
          <MyButton onClick={handleRemoveData}>Remover Slide</MyButton>
        </Container>
      </ContainerRow>
    </>
  );
}

// https://www.youtube.com/watch?v=3sQITRihW_A&t=584s
