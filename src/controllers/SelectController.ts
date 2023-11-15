import supabase from "../../lib/supabase-client";
/* Mudar o nome das funções para ficar mais genérico. */

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

/* Rever a necessidade desse recuperar
e verificar ser da pra diminuir a quantidade. */
// Função para obter IDs de materiais associados a uma turma
const getMaterialIdsPorTurma = async (idTurma: number) => {
  try {
    const { data } = await supabase
      .from("material_turma")
      .select("id_material")
      .eq("id_turma", idTurma);
    if (data === null) {
      throw new Error("Resposta nula ao buscar IDs de materiais");
    } else {
      const ids = data.map((item) => item.id_material as number);
      return ids;
    }
  } catch (error) {
    throw new Error(`Erro na consulta: ${error}`);
  }
};

const getDetalhesMateriaisPorIds = async (idsMateriais: number[]) => {
  try {
    const { data } = await supabase
      .from("material")
      .select("*")
      .in("id", idsMateriais); // verifica se no select os 'id' está no array de ids 'idsMateriais'
    if (data === null) {
      throw new Error("Resposta nula ao buscar IDs de materiais");
    } else {
      return data;
    }
  } catch (error) {
    throw new Error(`Erro na consulta: ${error}`);
  }
};

const selectMaterialByCourseId = async (idTurma: number) => {
  /*const detalhesMateriais = await getDetalhesMateriaisPorIds(
    await getMaterialIdsPorTurma(idTurma)
  );
  console.log(`detalhes finais: ${detalhesMateriais}`);*/
  return await getDetalhesMateriaisPorIds(
    await getMaterialIdsPorTurma(idTurma)
  );
};

export {
  selectMaterial,
  selectMaterials,
  selectMaterialByText,
  selectMaterialByCourseId,
};
