import {
  Overlay,
  DialogContent,
  ButtonContainer,
  MyButton,
  MyButtonLink,
} from "./ConfirmationDialog.Style";
import { IConfirmationDialog } from "../../../types/interfaces";

export default function Dialog({
  isVisible,
  message,
  confirmText,
  cancelText,
  onConfirm,
  onCancel,
}: IConfirmationDialog) {
  if (!isVisible) return null;

  return (
    <>
      <Overlay />
      <DialogContent>
        <p>{message}</p>
        <ButtonContainer>
          <MyButtonLink onClick={onCancel}>{cancelText}</MyButtonLink>
          <MyButton onClick={onConfirm}>{confirmText}</MyButton>
        </ButtonContainer>
      </DialogContent>
    </>
  );
}
