import { useCallback, useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { ReactNotifications } from "react-notifications-component";

import { PostType } from "../../../types/collections";
import MaterialElement from "../../components/MaterialElement/MaterialElement";
import { selectMaterialByText, selectMaterials } from "../../controllers/SelectController";
import { ShowNotification } from "../../utils/ShowNotificationUtil";
import { Container, InputData, MyButton, RowContainer } from "./MaterialList.Style";

export default function MaterialList() {
  const [textSearch, setTextSearch] = useState("");
  const [posts, setPost] = useState<PostType[]>([]);
  const fetcher = useCallback(async () => {
    selectMaterials("material", "id")
      .then((result) => {
        setPost(result);
      })
      .catch(() => {
        ShowNotification({
          title: "Notificação",
          content: `Erro ao recuperar materiais.`,
          time: 4000,
        });
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
      handleGetMaterials(textSearch);
    } else if (e.key == "Escape") {
      handleGetMaterials("");
      setTextSearch("");
    }
  };

  const handleGetMaterials = (textSearch: string) => {
    if (textSearch == "") {
      fetcher();
    } else {
      selectMaterialByText("material", "title", textSearch)
        .then((result) => {
          setPost(result);
        })
        .catch((error) => {
          ShowNotification({
            title: "Notificação",
            content: `${error.message}`,
            time: 4000,
          });
        });
    }
  };

  return (
    <>
      <ReactNotifications />
      <Container>
        <RowContainer>
          <InputData
            type="text"
            placeholder="Pesquise materiais"
            name="pesquisa"
            value={textSearch}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
          <MyButton onClick={() => handleGetMaterials(textSearch)}>
            <FiSearch />
          </MyButton>
        </RowContainer>
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
      </Container>
    </>
  );
}
