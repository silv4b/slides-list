import { useState } from "react";
import MaterialElement from "../../components/MaterialElementComponent/MaterialElement";
import { PostType } from "../../../types/collections";
import { useCallback, useEffect } from "react";
import {
  selectMaterials,
  selectMaterialByText,
} from "../../controllers/SelectController";
import { InputData, Container, MyButton } from "./MaterialList.Style";

export default function MaterialList() {
  const [textSearch, setTextSearch] = useState("");
  const [posts, setPost] = useState<PostType[]>([]);
  const fetcher = useCallback(async () => {
    selectMaterials("material", "id").then((result) => {
      if (result == "error") {
        alert(`Erro ao recuperar material!`);
        console.error(result);
      } else {
        setPost(result);
      }
    });
  }, []);

  useEffect(() => {
    fetcher();
  }, [fetcher]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextSearch(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key == "Enter") {
      handleGetSlides(textSearch);
    } else if (e.key == "Escape") {
      handleGetSlides("");
      setTextSearch("");
    }
  };

  const handleGetSlides = (textSearch: string) => {
    if (textSearch == "") {
      fetcher();
    } else {
      selectMaterialByText("material", "title", textSearch).then((result) => {
        if (result == "error") {
          alert(`Erro ao recuperar material!`);
          console.error(result);
        } else if (result.length == 0) {
          alert("Nenhum material coincide com a pesquisa!");
        } else {
          setPost(result);
        }
      });
    }
  };

  return (
    <>
      <Container>
        <InputData
          type="text"
          placeholder="Pesquise materiais"
          name="pesquisa"
          value={textSearch}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <MyButton onClick={() => handleGetSlides(textSearch)}> 🔎 </MyButton>
      </Container>
      {posts.map((post) => (
        <MaterialElement
          key={post.id}
          id={post.id}
          title={post.title}
          subtitle={post.subtitle}
          created_at={post.created_at}
          url={post.url}
        />
      ))}
    </>
  );
}
