import { useState } from "react";
import SlideElement from "../SlideElement/SlideElement";
import { PostType } from "../../../types/collections";
import { useCallback, useEffect } from "react";
import {
  selectSlides,
  selectSlidesByText,
} from "../../controllers/slide/SelectSlidesController";
import { InputData, Container, MyButton } from "./SlideList.Style";

export default function SlideList() {
  const [textSearch, setTextSearch] = useState("");
  const [posts, setPost] = useState<PostType[]>([]);
  const fetcher = useCallback(async () => {
    selectSlides("slides", "id").then((result) => {
      if (result == "error") {
        alert(`Erro ao recuperar slides! 😢`);
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
    }
  };

  const handleGetSlides = (textSearch: string) => {
    if (textSearch == "") {
      fetcher();
    } else {
      selectSlidesByText("slides", "title", textSearch, "id").then((result) => {
        if (result == "error") {
          alert(`Erro ao recuperar slides! 😢`);
          console.error(result);
        } else if (result.length == 0) {
          alert("Nenhum dado coincide com a pesquisa!");
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
        <SlideElement
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
