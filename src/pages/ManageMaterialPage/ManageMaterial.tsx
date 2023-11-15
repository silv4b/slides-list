import { useState } from "react";
import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css"; // alterar o componente para remover esse tema
import { ShowNotification } from "../../Utils/ShowNotificationUtil";
import Dialog from "../../components/ConfirmationDialogComponent/ConfirmationDialog";
import Navbar from "../../components/NavbarComponent/Navbar";
import {
  Container,
  ContainerRow,
  Title,
  Subtitle,
  InputData,
  MyButton,
  ButtonContainer,
} from "./ManageMaterial.Style";
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

  const [idToDelete, setIdToDelete] = useState<number | undefined>(undefined);
  const [textMainButton, setTextMainButton] = useState("Adicionar");
  const [textActionOnRight, setTextActionOnRight] = useState("Remover");
  const [textActionOnLeft, setTextActionOnLeft] = useState("Adicionar");
  /*
  State para definir se o dialog é exibido ou não e
  state para guardar a função a ser executada no confirmar do dialog
  */
  const [isConfirmationVisible, setIsConfirmationVisible] = useState(false);
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

  /*
  Recebe uma função para ser executada caso o continuar seja clicado.
  Dessa forma qualquer handler é usado normalmente e ele fica responsável pela chamada do dialog.
  */
  const openConfirmationDialog = (confirmAction: () => void) => {
    setConfirmFunction(() => confirmAction);
    setIsConfirmationVisible(true);
  };

  const handleInsertData = async () => {
    // Lógica a ser executada quando o usuário confirma
    openConfirmationDialog(() => {
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
              time: 4000,
            });
          } else {
            ShowNotification({
              title: "Notificação",
              content: "Ocorreu algum erro!",
              time: 4000,
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
          time: 4000,
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
              time: 4000,
            });
          })
          .catch((error) => {
            ShowNotification({
              title: "Notificação",
              content: `Erro ao inserir dados no banco de dados: ${error.message}`,
              time: 4000,
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
        time: 4000,
      });
      handleClearForm();
    } else {
      selectMaterial("material", idToDelete).then((result) => {
        if (result == undefined) {
          ShowNotification({
            title: "Notificação",
            content: `Material Nº ${idToDelete} não foi encontrado.`,
            time: 4000,
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
        });
        handleClearForm();
      } else {
        deleteMaterial("material", idToDelete).then((result) => {
          if (result) {
            ShowNotification({
              title: "Notificação",
              content: `Material Nº ${idToDelete} foi removido com sucesso!`,
              time: 4000,
            });
          } else {
            ShowNotification({
              title: "Notificação",
              content: `Material Nº ${idToDelete} não existe!`,
              time: 4000,
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
        time: 4000,
      });
    });
  };

  /* Handler que seta a função que vai ser executada quando o usuário clicar em continuar */
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
      time: 4000,
    });
  };

  const handleKeydown = (e: React.KeyboardEvent) => {
    if (e.key == "Enter") {
      handleEditData();
    } else if (e.key == "Escape") {
      handleClearForm();
    }
  };
  return (
    <>
      <Navbar />
      <ReactNotifications />
      <ContainerRow>
        <Container>
          <Title>{textActionOnLeft}</Title>
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
            onKeyDown={handleKeydown}
          />
          <ButtonContainer>
            <MyButton onClick={handleEditData}>Buscar</MyButton>
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
