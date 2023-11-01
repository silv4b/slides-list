import { useState } from "react";
import {
  Container,
  ContainerRow,
  Title,
  Subtitle,
  InputData,
  MyButton,
  MyButtonOutlined,
} from "./ManageMaterial.Style";
import { Link } from "react-router-dom";
import { SlideType } from "../../../types/slide";
import { selectMaterial } from "../../controllers/material/SelectController";
import { deleteMaterial } from "../../controllers/material/DeleteController";
import { insertMaterial } from "../../controllers/material/InsertController";
import { updateSlide } from "../../controllers/material/UpdateController";

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
      updateSlide("material", idToDelete, {
        title: formSlide.title,
        subtitle: formSlide.subtitle,
        url: formSlide.url,
      }).then((result) => {
        if (result == true) {
          alert(`Material Nº ${idToDelete} foi atualizado com sucesso!`);
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
      alert("Erro ao inserir material no banco de dados.");
    } else {
      insertMaterial("material", {
        title: formSlide.title,
        subtitle: formSlide.subtitle,
        url: formSlide.url,
      })
        .then((result) => {
          console.log(result);
          alert(`Dados inseridos corretamente no banco de dados: ${result}`);
        })
        .catch((error) => {
          alert(`Erro ao inserir dados no banco de dados: ${error.message}`);
        });
    }
    handleClearForm();
    setTextMainButton("Adicionar Slide");
  };

  const handleEditData = async () => {
    if (idToDelete == undefined) {
      alert("Erro ao recuperar material do banco de dados!");
      handleClearForm();
    } else {
      setTextActionOnLeft("Editando Material");
      setTextActionOnRight("Editando Material");
      selectMaterial("material", idToDelete).then((result) => {
        if (result == undefined) {
          alert(`Material Nº ${idToDelete} foi removido com sucesso!`);
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
      deleteMaterial("material", idToDelete).then((result) => {
        if (result == true) {
          alert(`Material Nº ${idToDelete} foi removido com sucesso!`);
        } else {
          alert(`Material Nº ${idToDelete} não existe!`);
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
