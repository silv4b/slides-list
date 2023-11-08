import { useState, useCallback, useEffect } from "react";
import { ReactNotifications } from "react-notifications-component";
import { ShowNotification } from "../../Utils/ShowNotificationUtil";
import MaterialElement from "../../components/MaterialElementComponent/MaterialElement";
import { FiSearch } from "react-icons/fi";
import {
  InputData,
  RowContainer,
  Container,
  MyButton,
} from "./MaterialList.Style";
import { PostType } from "../../../types/collections";
import {
  selectMaterials,
  selectMaterialByText,
} from "../../controllers/SelectController";

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
      selectMaterialByText("material", "title", textSearch).then((result) => {
        if (result == "error") {
          ShowNotification({
            title: "Notificação",
            content: "Erro ao recuperar material!",
            time: 4000,
          });
        } else if (result.length == 0) {
          ShowNotification({
            title: "Notificação",
            content: "Nenhum material coincide com a pesquisa!",
            time: 4000,
          });
        } else {
          setPost(result);
        }
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
