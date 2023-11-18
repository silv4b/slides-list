import { INotificationData } from "../../../types/interfaces";
import { Container, Content, Title } from "./Notification.Style";

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
