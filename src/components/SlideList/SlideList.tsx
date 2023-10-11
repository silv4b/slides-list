import { useState } from "react";
import supabase from "../../../lib/supabase-client";
import SlideElement from "../SlideElement/SlideElement";
// import { slides } from "../SlideList/Slides";
import { PostType } from "../../../types/collections";
import { useCallback, useEffect } from "react";

export default function SlideList() {
  const [posts, setPost] = useState<PostType[]>([]);
  const fetcher = useCallback(async () => {
    const { data, error } = await supabase.from("slides").select("*");
    if (error) {
      console.log("Error: ", error);
    } else {
      setPost(data);
    }
  }, []);

  useEffect(() => {
    fetcher();
  }, [fetcher]);

  return (
    <>
      {posts.map((post) => (
        <SlideElement
          // identificador unico
          key={post.id}
          //   props necessárias para o componente
          title={post.title}
          subtitle={post.subtitle}
          created_at={post.created_at}
          url={post.url}
        />
      ))}
    </>
  );
}
