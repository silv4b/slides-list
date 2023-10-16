import { useState } from "react";
import supabase from "../../../lib/supabase-client";
import SlideElement from "../SlideElement/SlideElement";
import { PostType } from "../../../types/collections";
import { useCallback, useEffect } from "react";

export default function SlideList() {
  const [posts, setPost] = useState<PostType[]>([]);
  const fetcher = useCallback(async () => {
    const { data, error } = await supabase.from("slides").select("*").order('id', { ascending: true });
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
