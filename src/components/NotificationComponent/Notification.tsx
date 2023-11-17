import { Container, Title, Content } from "./Notification.Style";
import { INotificationData } from "../../../types/interfaces";

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
