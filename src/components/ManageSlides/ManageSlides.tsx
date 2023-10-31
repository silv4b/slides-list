import { useState } from "react";
import {
  Container,
  ContainerRow,
  Title,
  Subtitle,
  InputData,
  MyButton,
  MyButtonOutlined,
} from "./ManageSlides.Style";
import { Link } from "react-router-dom";
import { SlideType } from "../../../types/slide";
import { selectSlide } from "../../controllers/slide/SelectController";
import { deleteSlide } from "../../controllers/slide/DeleteController";
import { insertSlide } from "../../controllers/slide/InsertController";
import { updateSlide } from "../../controllers/slide/UpdateController";

export default function ManageSlides() {
  const [formSlide, setFormSlide] = useState<SlideType>({
    title: "",
    subtitle: "",
    url: "",
  });

  const [idToDelete, setIdToDelete] = useState<number | undefined>(undefined);
  const [textMainButton, setTextMainButton] = useState("Adicionar Slide");
  const [textActionOnRight, setTextActionOnRight] = useState("Remover Slides");
  const [textActionOnLeft, setTextActionOnLeft] = useState("Adicionar Slides");

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
    if (idToDelete != undefined) {
      console.log("Tá com valor!");
      updateSlide("slides", idToDelete, {
        title: formSlide.title,
        subtitle: formSlide.subtitle,
        url: formSlide.url,
      }).then((result) => {
        if (result == true) {
          alert(`Slide Nº ${idToDelete} foi atualizado com sucesso!`);
        } else {
          alert(`Ocorreu algum erro!`);
        }
        setTextActionOnLeft("Adicionando Slide");
        setTextActionOnRight("Removendo Slide");
        handleClearForm();
      });
      return;
    }
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
    setTextMainButton("Adicionar Slide");
  };

  const handleEditData = async () => {
    if (idToDelete == undefined) {
      alert("Erro ao recuperar slide do banco de dados!");
      handleClearForm();
    } else {
      setTextActionOnLeft("Editando Slide");
      setTextActionOnRight("Editando Slide");
      selectSlide("slides", idToDelete).then((result) => {
        if (result == undefined) {
          alert(`Slide Nº ${idToDelete} foi removido com sucesso!`);
        } else {
          setFormSlide({
            title: result.title,
            subtitle: result.subtitle,
            url: result.url,
          });
        }
      });
    }
    setTextMainButton("Salvar Slide");
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
            {textActionOnLeft}
            <Link to="/">.</Link>
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

          <MyButtonOutlined onClick={handleInsertData}>
            {textMainButton}
          </MyButtonOutlined>
        </Container>

        <Container>
          <Title>{textActionOnRight}</Title>
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
          <ContainerRow>
            <MyButtonOutlined onClick={handleEditData}>
              Editar Slide
            </MyButtonOutlined>
            <MyButton onClick={handleRemoveData}>Remover Slide</MyButton>
          </ContainerRow>
        </Container>
      </ContainerRow>
    </>
  );
}

// https://www.youtube.com/watch?v=3sQITRihW_A&t=584s
