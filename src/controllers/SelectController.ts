import supabase from "../../lib/supabase-client";

// seleciona um material pelo id
const selectMaterial = async (tableName: string, idToGetData: number) => {
  const { error, data } = await supabase
    .from(tableName)
    .select("*")
    .eq("id", idToGetData);
  if (error) {
    return false;
  } else {
    return data[0];
  }
};

// seleciona material e coluna de ordenação
const selectMaterials = async (tableName: string, orderBy: string) => {
  const { error, data } = await supabase
    .from(tableName)
    .select("*")
    .order(orderBy, { ascending: true });
  if (error) {
    throw new Error("Erro ao recuperar dados!");
  } else {
    return data;
  }
};

// seleciona material pelo texto e coluna de ordenação
const selectMaterialByText = async (
  tableName: string,
  columnName: string,
  searchBy: string,
  orderBy: string = "id"
) => {
  const { error, data, count } = await supabase
    .from(tableName)
    .select("*", { count: "exact" })
    .order(orderBy, { ascending: true })
    .textSearch(columnName, searchBy, {
      type: "websearch",
      config: "english",
    });
  if (error) {
    // throw error; or
    throw new Error(`${error}`);
  } else if (count == null || count == 0) {
    // ajeitar para validar o count na desestruturação
    throw new Error("Não existe retorno para o valor pesquisado!");
  } else {
    return data;
  }
};

export { selectMaterial, selectMaterials, selectMaterialByText };
