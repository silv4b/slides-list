import supabase from "../../lib/supabase-client";

export const deleteMaterial = async (tableName: string, idToDelete: number) => {
  // verifica se o material existe
  const { error, count } = await supabase
    .from(tableName)
    .select("*", { count: "exact", head: true })
    .eq("id", idToDelete);
  // organizar essa estratégia pra deixar padronizado
  if (error || count == null || count == 0) {
    return false;
  } else {
    const { error } = await supabase
      .from("slides")
      .delete()
      .eq("id", idToDelete);
    if (error) {
      return false;
    } else {
      return true;
    }
  }
};
