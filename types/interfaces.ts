// Interfaces usadas no projeto

interface MyButtonProps {
  backgroundColor: string;
  hoverColor: string;
}

interface IConfirmationDialog {
  isVisible: boolean;
  message: string;
  confirmText: string;
  cancelText: string;
  onConfirm: () => void;
  onCancel: () => void;
}

interface ICourseType {
  id: number;
  nome: string;
  codigo: number;
  diario_url: string;
  gsa_url: string;
  created_at: string;
}

interface IMaterialElement {
  id: number;
  title: string;
  subtitle: string;
  url: string;
  created_at: string;
}

// Rever e organizar para remover uma dessas interfaces, pois as mesmas são muito parecidas

interface INotificationData {
  title: string;
  message: string;
}

interface INotification {
  title: string;
  content: string;
  time: number;
}

// Re-exporting a type when 'isolatedModules' is enabled requires using 'export type'
export type {
  MyButtonProps,
  IConfirmationDialog,
  ICourseType,
  IMaterialElement,
  INotificationData,
  INotification,
};
