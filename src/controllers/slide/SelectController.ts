import supabase from "../../../lib/supabase-client";

export const selectSlide = async (tableName: string, idToGetData: number) => {
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
