import supabase from "../../../lib/supabase-client";

export const deleteSlide = async (tableName: string, idToDelete: number) => {
  // verifica se o slide existe
  const { error, count } = await supabase
    .from(tableName)
    .select("*", { count: "exact", head: true })
    .eq("id", idToDelete);
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
