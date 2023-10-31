import supabase from "../../../lib/supabase-client";

export const selectSlides = async (tableName: string, orderBy: string) => {
  const { error, data } = await supabase
    .from(tableName)
    .select("*")
    .order(orderBy, { ascending: true });
  if (error) {
    return error.message;
  } else {
    return data;
  }
};
