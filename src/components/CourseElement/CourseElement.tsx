import { BsArrowRightCircle } from "react-icons/bs";
import { SiGoogleclassroom, SiSanic } from "react-icons/si";
import { ReactNotifications } from "react-notifications-component";
import { useNavigate } from "react-router-dom";

import { ICourseType } from "../../../types/interfaces";
import { ShowNotification } from "../../utils/ShowNotificationUtil";
import { ButtonContainer, Container, CourseCode, MyButton, Title } from "./CourseElement.Style";

export default function CourseElement({
  codigo,
  nome,
  gsa_url,
  diario_url,
}: Partial<ICourseType>) {
  const navigate = useNavigate();
  const handleClick = (codigo: number) => {
    /* Navegando para a pagina de disciplinas (Course)
    passando o código da mesma como parâmetro .*/
    navigate(`/courses/${codigo}`);
  };

  const handleNewTab = (url: string) => {
    if (!url) {
      ShowNotification({
        title: "Notificação",
        content: `Deu errado!`,
        time: 4000,
      });
    } else {
      window.open(url, "_blank");
    }
  };
  return (
    <>
      <ReactNotifications />
      <Container>
        <CourseCode>{codigo}</CourseCode>
        <Title>{nome}</Title>
        <ButtonContainer>
          <MyButton onClick={() => handleNewTab(gsa_url!)}>
            <SiGoogleclassroom />
          </MyButton>
          <MyButton onClick={() => handleNewTab(diario_url!)}>
            <SiSanic />
          </MyButton>
          <MyButton onClick={() => handleClick(codigo!)}>
            <BsArrowRightCircle />
          </MyButton>
        </ButtonContainer>
      </Container>
    </>
  );
}
