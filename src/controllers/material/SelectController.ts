import supabase from "../../../lib/supabase-client";

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
    return "error";
  } else {
    return data;
  }
};

// seleciona material pelo texto e coluna de ordenação
const selectMaterialByText = async (
  tableName: string,
  columnName: string,
  searchBy: string,
  orderBy?: string
) => {
  // se orderBy não foi repassado, por padrão, recebe "id"
  if (!orderBy) {
    orderBy = "id"
  }
  const { error, data } = await supabase
    .from(tableName)
    .select("*")
    .order(orderBy, { ascending: true })
    .textSearch(columnName, searchBy, {
      type: "websearch",
      config: "english",
    });
  if (error) {
    return "error";
  } else {
    return data;
  }
};

export { selectMaterial, selectMaterials, selectMaterialByText };
