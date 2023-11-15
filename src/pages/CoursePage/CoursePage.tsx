import Navbar from "../../components/NavbarComponent/Navbar";
import { selectMaterialByCourseId } from "../../controllers/SelectController";
import { Container } from "./CoursePage.Style";
import { useLocation } from "react-router-dom";

export default function CoursePage() {
  const location = useLocation();
  const courseData = location.state;

  const handleClick = () => {
    console.log(courseData);
    selectMaterialByCourseId(courseData.id);
  };

  return (
    <>
      <Navbar />
      <Container>
        <h1> Course Page</h1>
        <h3>
          {courseData.id} - {courseData.nome}
        </h3>
        <button onClick={handleClick}>Consulte</button>
      </Container>
    </>
  );
}
