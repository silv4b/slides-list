import supabase from "../../lib/supabase-client";
import { MaterialType } from "../../types/my_types";

export const updateMaterial = async (
  tableName: string,
  idToUpdate: number,
  dataToUpdate: Partial<MaterialType>
) => {
  // verifica se o material existe
  const { error, count } = await supabase
    .from(tableName)
    .select("*", { count: "exact", head: true })
    .eq("id", idToUpdate);
  if (error || count == null || count == 0) {
    return false;
  } else {
    const { error } = await supabase
      .from(tableName)
      .update(dataToUpdate)
      .eq("id", idToUpdate);
    if (error) {
      return false;
    } else {
      return true;
    }
  }
};
