import supabase from "../../lib/supabase-client";
import { SlideType } from "../../types/slide";

export const updateSlide = async (
  tableName: string,
  idToUpdate: number,
  dataToUpdate: Partial<SlideType>
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
      .from("slides")
      .update(dataToUpdate)
      .eq("id", idToUpdate);
    if (error) {
      return false;
    } else {
      return true;
    }
  }
};
