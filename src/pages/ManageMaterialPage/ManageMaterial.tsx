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
import { MaterialType } from "../../../types/my_types";
import { selectMaterial } from "../../controllers/SelectController";
import { deleteMaterial } from "../../controllers/DeleteController";
import { insertMaterial } from "../../controllers/InsertController";
import { updateSlide } from "../../controllers/UpdateController";

export default function ManageSlides() {
  const [formMaterial, setFormMaterial] = useState<MaterialType>({
    title: "",
    subtitle: "",
    url: "",
  });

  const [idToDelete, setIdToDelete] = useState<number | undefined>(undefined);
  const [textMainButton, setTextMainButton] = useState("Adicionar Material");
  const [textActionOnRight, setTextActionOnRight] = useState("Remover Material");
  const [textActionOnLeft, setTextActionOnLeft] = useState("Adicionar Material");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Decomposição
    const { name, value } = e.target;
    setFormMaterial((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleClearForm = () => {
    setFormMaterial({
      title: "",
      subtitle: "",
      url: "",
    });
    setIdToDelete(undefined);
  };

  const handleInsertData = async () => {
    if (idToDelete != undefined) {
      updateSlide("material", idToDelete, {
        title: formMaterial.title,
        subtitle: formMaterial.subtitle,
        url: formMaterial.url,
      }).then((result) => {
        if (result == true) {
          alert(`Material Nº ${idToDelete} foi atualizado com sucesso!`);
        } else {
          alert(`Ocorreu algum erro!`);
        }
        setTextActionOnLeft("Adicionando Material");
        setTextActionOnRight("Removendo Material");
        handleClearForm();
      });
      return;
    }
    if (
      formMaterial.title == "" ||
      formMaterial.subtitle == "" ||
      formMaterial.url == ""
    ) {
      alert("Erro ao inserir material no banco de dados.");
    } else {
      insertMaterial("material", {
        title: formMaterial.title,
        subtitle: formMaterial.subtitle,
        url: formMaterial.url,
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
    setTextMainButton("Adicionar Material");
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
          setFormMaterial({
            title: result.title,
            subtitle: result.subtitle,
            url: result.url,
          });
        }
      });
    }
    setTextMainButton("Salvar Material");
  };

  const handleRemoveData = async () => {
    if (idToDelete == undefined) {
      alert("Erro ao remover material do banco de dados: Campo(s) vazios!");
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

  const handleCancelOperation = () => {
    setTextActionOnLeft("Adicionar Material");
    setTextActionOnRight("Remover Material");
    handleClearForm();
  };

  return (
    <>
      <ContainerRow>
        <Container>
          <Title>
            {textActionOnLeft}
            <Link to="/">.</Link>
          </Title>
          <Subtitle>Dados do Material</Subtitle>

          <InputData
            type="text"
            placeholder="Título"
            name="title"
            value={formMaterial.title}
            onChange={handleChange}
          />
          <InputData
            type="text"
            placeholder="Subtítulo"
            name="subtitle"
            value={formMaterial.subtitle}
            onChange={handleChange}
          />
          <InputData
            type="text"
            placeholder="URL"
            name="url"
            value={formMaterial.url}
            onChange={handleChange}
          />
          <ContainerRow>
            <MyButtonOutlined onClick={handleInsertData}>
              {textMainButton}
            </MyButtonOutlined>
            <MyButton onClick={handleCancelOperation}>Cancelar</MyButton>
          </ContainerRow>
        </Container>

        <Container>
          <Title>{textActionOnRight}</Title>
          <Subtitle>Identificador do Material</Subtitle>
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
              Editar Material
            </MyButtonOutlined>
            <MyButton onClick={handleRemoveData}>Remover Material</MyButton>
          </ContainerRow>
        </Container>
      </ContainerRow>
    </>
  );
}

// https://www.youtube.com/watch?v=3sQITRihW_A&t=584s
