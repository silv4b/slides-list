import {
  Overlay,
  DialogContent,
  ButtonContainer,
  MyButton,
  MyButtonLink,
} from "./ConfirmationDialog.Style";

interface IConfirmationDialog {
  onConfirm: () => void;
  onCancel: () => void;
}

export default function Dialog({ onConfirm, onCancel }: IConfirmationDialog) {
  const handleConfirm = () => {
    onConfirm();
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <>
      <Overlay />
      <DialogContent>
        <p>Tem certeza de que deseja continuar?</p>
        <ButtonContainer>
          <MyButtonLink onClick={handleCancel}>Cancelar</MyButtonLink>
          <MyButton onClick={handleConfirm}>Continuar</MyButton>
        </ButtonContainer>
      </DialogContent>
    </>
  );
}
