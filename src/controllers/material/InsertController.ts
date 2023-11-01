import supabase from "../../../lib/supabase-client";
import { SlideType } from "../../../types/slide";

// recebe a tabela e o objeto montado no formulário que serão usados para fazer o insert no supabase
export const insertMaterial = async (
  tableName: string,
  dataToInsert: SlideType
) => {
  const { data, error } = await supabase
    .from(tableName) // busca a tabala destino
    .insert([dataToInsert]) // faz o inserto dos dados
    .select(); // returning do dado para exibição
  if (error) {
    return error;
  } else {
    // retorna a primeira posição do data, o qual eu posso acessar os dados do formato FormData
    return data[0].title;
  }
};
