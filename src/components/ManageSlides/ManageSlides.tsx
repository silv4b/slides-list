import { useState } from "react";
import {
  Container,
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
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
  };

  const handleInsertData = async () => {
    if (formData.title == "" || formData.subtitle == "" || formData.url == "") {
      console.error("Erro ao inserir dados no Supabase: Campo(s) vazios!");
      handleClearForm();
    } else {
      const { data, error } = await supabase.from("slides").insert([
        {
          title: formData.title,
          subtitle: formData.subtitle,
          url: formData.url,
        },
      ]);

      if (error) {
        console.error("Erro ao inserir dados no Supabase:", error);
      } else {
        console.log("Dados inseridos com sucesso no Supabase:", data);
      }
      handleClearForm();
    }
  };

  const handleRemoveData = async () => {
    if (idToDelete !== undefined) {
      const { error } = await supabase
        .from("slides")
        .delete()
        .eq("id", idToDelete);

      if (error) {
        console.error("Erro ao remover dados do Supabase:", error);
      } else {
        console.log("Dados removidos com sucesso do Supabase");
        setIdToDelete(undefined);
      }
    }
  };

  return (
    <>
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

        {/* {showData && (
          <div>
            <h2>Dados inseridos:</h2>
            <p>Título: {formData.title}</p>
            <p>Subtítulo: {formData.subtitle}</p>
            <p>Link: {formData.url}</p>
          </div>
        )} */}

        <Title>Remover Slides</Title>
        <Subtitle>Remova slides usando ID</Subtitle>
        <InputData
          type="number"
          placeholder="Identificador"
          value={idToDelete || ""}
          onChange={(e) => setIdToDelete(parseInt(e.target.value) || undefined)}
        />
        <MyButton onClick={handleRemoveData}>Remover Slide</MyButton>
      </Container>
    </>
  );
}

// https://www.youtube.com/watch?v=3sQITRihW_A&t=584s
