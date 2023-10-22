import { useState } from "react";
import {
  Container,
  ContainerRow,
  Title,
  Subtitle,
  InputData,
  MyButton,
} from "./ManageSlides.Style";
import supabase from "../../../lib/supabase-client";
import { Link } from "react-router-dom";

interface FormData {
  title: string;
  subtitle: string;
  url: string;
}

export default function ManageSlides() {
  const [formData, setFormData] = useState<FormData>({
    title: "",
    subtitle: "",
    url: "",
  });
  //   const [showData, setShowData] = useState(false);
  const [idToDelete, setIdToDelete] = useState<number | undefined>(undefined);
  const [returnedSize, setReturnedSize] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Decomposição
    const { name, value } = e.target;
    console.log(e.target);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleClearForm = () => {
    setFormData({
      title: "",
      subtitle: "",
      url: "",
    });
    setIdToDelete(undefined);
  };

  const handleInsertData = async () => {
    if (formData.title == "" || formData.subtitle == "" || formData.url == "") {
      alert("Erro ao inserir dados no Supabase: Campo(s) vazios!");
    } else {
      const { error } = await supabase.from("slides").insert([
        {
          title: formData.title,
          subtitle: formData.subtitle,
          url: formData.url,
        },
      ]);

      if (error) {
        alert(`Erro ao inserir dados no Supabase: ${error}`);
      } else {
        alert(`Dados inseridos com sucesso no Supabase!`);
      }
    }
    handleClearForm();
  };

  const handleRemoveData = async () => {
    if (idToDelete == undefined) {
      alert("Erro ao remover slide do banco de dados: Campo(s) vazios!");
      handleClearForm();
      return;
    }

    // Verifica se o slide com id repassado existe (handleExistsData)
    if (idToDelete !== undefined) {
      const { error, count } = await supabase
        .from("slides")
        .select("*", { count: "exact", head: true })
        .eq("id", idToDelete);
      if (error) {
        alert(`Erro ao remover dados no Supabase: ${error}`);
      } else {
        setReturnedSize(count);
        if (returnedSize == null || returnedSize == 0) {
          alert(
            `Não existe nenhum slide com o identificador ${idToDelete} no banco de dados.`
          );
        } else {
          const { error } = await supabase
            .from("slides")
            .delete()
            .eq("id", idToDelete);

          if (error) {
            alert(`Erro ao remover slide do banco de dados: ${error}`);
          } else {
            alert("Slide removido com sucesso!");
          }
        }
      }
      handleClearForm();
    }
  };

  return (
    <>
      <ContainerRow>
        <Container>
          <Title>
            Adicionar Slides<Link to="/">.</Link>
          </Title>
          <Subtitle>Adicionar Slides</Subtitle>

          <InputData
            type="text"
            placeholder="Título"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
          <InputData
            type="text"
            placeholder="Subtítulo"
            name="subtitle"
            value={formData.subtitle}
            onChange={handleChange}
          />
          <InputData
            type="text"
            placeholder="URL"
            name="url"
            value={formData.url}
            onChange={handleChange}
          />

          <MyButton onClick={handleInsertData}>Adicionar Slide</MyButton>
        </Container>

        <Container>
          <Title>Remover Slides</Title>
          <Subtitle>Remova slides usando ID</Subtitle>
          <InputData
            type="number"
            placeholder="Identificador"
            name="identificador"
            value={idToDelete || ""}
            onChange={(e) =>
              setIdToDelete(parseInt(e.target.value) || undefined)
            }
          />
          <MyButton onClick={handleRemoveData}>Remover Slide</MyButton>
        </Container>
      </ContainerRow>

      {/* <ContainerRow>
        <MyButton onClick={handleRemoveData}>Remover Slide</MyButton>
        <MyButton onClick={handleInsertData}>Adicionar Slide</MyButton>
      </ContainerRow> */}
    </>
  );
}

// https://www.youtube.com/watch?v=3sQITRihW_A&t=584s
