import { Container, Title, Content } from "./Notification.Style";

interface INotificationData {
  title: string;
  message: string;
}

export default function NotificationComponent({
  title,
  message,
}: INotificationData) {
  return (
    <>
      <Container>
        <Title>{title}</Title>
        <Content>{message}</Content>
      </Container>
    </>
  );
}
