import { useState } from "react";
import SlideElement from "../SlideElement/SlideElement";
import { PostType } from "../../../types/collections";
import { useCallback, useEffect } from "react";
import { selectSlides } from "../../controllers/slide/SelectSlidesController";

export default function SlideList() {
  const [posts, setPost] = useState<PostType[]>([]);
  const fetcher = useCallback(async () => {
    selectSlides("slides", "id").then((result) => {
      if (result != undefined) {
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

  return (
    <>
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
