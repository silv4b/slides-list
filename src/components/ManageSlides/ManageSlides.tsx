import { useState } from "react";
import { Container, Title, Subtitle } from "./ManageSlides.Style";
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
  const [showData, setShowData] = useState(false);
  const [idToDelete, setIdToDelete] = useState<number | undefined>(undefined);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleInsertData = async () => {
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
      setShowData(true);
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

        <form>
          <div>
            <input
              type="text"
              placeholder="Título"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Subtítulo"
              id="subtitle"
              name="subtitle"
              value={formData.subtitle}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="URL"
              id="url"
              name="url"
              value={formData.url}
              onChange={handleChange}
            />
          </div>
        </form>
        <div>
          <button onClick={handleInsertData}>Adicionar Slide</button>
        </div>

        {showData && (
          <div>
            <h2>Dados inseridos:</h2>
            <p>Título: {formData.title}</p>
            <p>Subtítulo: {formData.subtitle}</p>
            <p>Link: {formData.url}</p>
          </div>
        )}
      </Container>
      <Container>
        <Title>Remover Slides</Title>
        <Subtitle>Remova slides usando ID</Subtitle>
        <input
          type="number"
          placeholder="Identificador"
          value={idToDelete || ""}
          onChange={(e) => setIdToDelete(parseInt(e.target.value) || undefined)}
        />
        <button onClick={handleRemoveData}>Remover Slide</button>
      </Container>
    </>
  );
}

// https://www.youtube.com/watch?v=3sQITRihW_A&t=584s
