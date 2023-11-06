import React, { useState } from "react";
import { ShowNotification } from "../../Utils/ShowNotificationUtil";
import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import {
  Container,
  ContainerRow,
  Title,
  Subtitle,
  InputData,
  MyButton,
  ButtonContainer,
} from "./ManageMaterial.Style";
import Dialog from "../../components/ConfirmationDialogComponent/ConfirmationDialog";
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
      // spread operator
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
            ShowNotification({
              title: "Notificação",
              content: `Material Nº ${idToDelete} foi atualizado com sucesso!`,
              time: 2000,
              width: 400,
            });
          } else {
            ShowNotification({
              title: "Notificação",
              content: "Ocorreu algum erro!",
              time: 2000,
              width: 400,
            });
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
        ShowNotification({
          title: "Notificação",
          content: "Erro ao inserir material no banco de dados.",
          time: 2000,
          width: 400,
        });
      } else {
        insertMaterial("material", {
          title: formMaterial.title,
          subtitle: formMaterial.subtitle,
          url: formMaterial.url,
        })
          .then((result) => {
            console.log(result);
            ShowNotification({
              title: "Notificação",
              content: `Dados inseridos corretamente no banco de dados: ${result}`,
              time: 2000,
              width: 400,
            });
          })
          .catch((error) => {
            ShowNotification({
              title: "Notificação",
              content: `Erro ao inserir dados no banco de dados: ${error.message}`,
              time: 2000,
              width: 400,
            });
          });
      }
      handleClearForm();
      setTextMainButton("Adicionar");
    });
  };

  const handleEditData = async () => {
    if (idToDelete == undefined) {
      ShowNotification({
        title: "Notificação",
        content: "Erro ao recuperar material do banco de dados!",
        time: 2000,
        width: 400,
      });
      handleClearForm();
    } else {
      selectMaterial("material", idToDelete).then((result) => {
        if (result == undefined) {
          ShowNotification({
            title: "Notificação",
            content: `Material Nº ${idToDelete} não foi encontrado.`,
            time: 2000,
            width: 400,
          });
        } else {
          setTextActionOnLeft("Editando Material");
          setTextActionOnRight("Editando Material");
          setTextMainButton("Salvar");
          setFormMaterial({
            title: result.title,
            subtitle: result.subtitle,
            url: result.url,
          });
        }
      });
    }
  };

  const handleRemoveData = async () => {
    openConfirmationDialog(() => {
      if (idToDelete == undefined) {
        ShowNotification({
          title: "Notificação",
          content:
            "Erro ao remover material do banco de dados: Campo(s) vazios!",
          time: 4000,
          width: 400,
        });
        handleClearForm();
      } else {
        deleteMaterial("material", idToDelete).then((result) => {
          if (result == true) {
            ShowNotification({
              title: "Notificação",
              content: `Material Nº ${idToDelete} foi removido com sucesso!`,
              time: 2000,
              width: 400,
            });
          } else {
            ShowNotification({
              title: "Notificação",
              content: `Material Nº ${idToDelete} não existe!`,
              time: 2000,
              width: 400,
            });
          }
          handleClearForm();
        });
      }
    });
  };

  const handleCancelOperation = () => {
    openConfirmationDialog(() => {
      setTextActionOnLeft("Adicionar");
      setTextActionOnRight("Remover");
      handleClearForm();
      ShowNotification({
        title: "Notificação",
        content: "Operação cancelada.",
        time: 2000,
        width: 400,
      });
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
    ShowNotification({
      title: "Notificação",
      content: "Operação cancelada.",
      time: 2000,
      width: 400,
    });
  };

  return (
    <>
      <ReactNotifications />
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
          <ButtonContainer>
            <MyButton onClick={handleInsertData}>{textMainButton}</MyButton>
            <MyButton onClick={handleCancelOperation}>Cancelar</MyButton>
          </ButtonContainer>
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
          <ButtonContainer>
            <MyButton onClick={handleEditData}>Editar</MyButton>
            <MyButton onClick={handleRemoveData}>Remover</MyButton>
          </ButtonContainer>
        </Container>
      </ContainerRow>
      {isConfirmationVisible && (
        <Dialog
          isVisible={isConfirmationVisible}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
          message="Deseja confirmar esta ação?"
          confirmText="Confirmar"
          cancelText="Cancelar"
        />
      )}
    </>
  );
}

// https://www.youtube.com/watch?v=3sQITRihW_A&t=584s
