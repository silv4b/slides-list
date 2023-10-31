import supabase from "../../../lib/supabase-client";

const selectSlides = async (tableName: string, orderBy: string) => {
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

const selectSlidesByText = async (
  tableName: string,
  columnName: string,
  searchBy: string,
  orderBy: string
) => {
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

export { selectSlides, selectSlidesByText };
