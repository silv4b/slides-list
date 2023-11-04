import React, { useState } from "react";
import {
  Container,
  ContainerRow,
  Title,
  Subtitle,
  InputData,
  MyButton,
} from "./ManageMaterial.Style";
import Dialog from "../../components/DialogComponent/Dialog";
import { Link } from "react-router-dom";
import { MaterialType } from "../../../types/my_types";
import { selectMaterial } from "../../controllers/SelectController";
import { deleteMaterial } from "../../controllers/DeleteController";
import { insertMaterial } from "../../controllers/InsertController";
import { updateMaterial } from "../../controllers/UpdateController";

export default function ManageMaterial() {
  const [formMaterial, setFormMaterial] = useState<MaterialType>({
    title: "",
    subtitle: "",
    url: "",
  });

  const [isConfirmationVisible, setIsConfirmationVisible] = useState(false);
  const [idToDelete, setIdToDelete] = useState<number | undefined>(undefined);
  const [textMainButton, setTextMainButton] = useState("Adicionar");
  const [textActionOnRight, setTextActionOnRight] = useState("Remover");
  const [textActionOnLeft, setTextActionOnLeft] = useState("Adicionar");
  const [confirmFunction, setConfirmFunction] = useState<(() => void) | null>(
    null
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  const openConfirmationDialog = (confirmAction: () => void) => {
    setConfirmFunction(() => confirmAction);
    setIsConfirmationVisible(true);
  };

  const handleInsertData = async () => {
    openConfirmationDialog(() => {
      // Lógica a ser executada quando o usuário confirma
      if (idToDelete != undefined) {
        updateMaterial("material", idToDelete, {
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
      } else if (
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
      setTextMainButton("Adicionar");
    });
  };

  const handleEditData = async () => {
    // openConfirmationDialog(() => {
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
    setTextMainButton("Salvar");
    // });
  };

  const handleRemoveData = async () => {
    openConfirmationDialog(() => {
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
    });
  };

  const handleCancelOperation = () => {
    // melhorar para aparecer apenas se algum dado tiver sido preenchido
    openConfirmationDialog(() => {
      setTextActionOnLeft("Adicionar");
      setTextActionOnRight("Remover");
      handleClearForm();
    });
  };

  const handleConfirm = () => {
    if (confirmFunction) {
      confirmFunction();
    }
    setIsConfirmationVisible(false);
  };

  const handleCancel = () => {
    setIsConfirmationVisible(false);
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
            <MyButton onClick={handleInsertData}>{textMainButton}</MyButton>
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
            <MyButton onClick={handleEditData}>Editar</MyButton>
            <MyButton onClick={handleRemoveData}>Remover</MyButton>
          </ContainerRow>
        </Container>
      </ContainerRow>
      {isConfirmationVisible && (
        <Dialog onConfirm={handleConfirm} onCancel={handleCancel} />
      )}
    </>
  );
}

// https://www.youtube.com/watch?v=3sQITRihW_A&t=584s