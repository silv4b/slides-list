import { createClient } from "@supabase/supabase-js";

import { Database } from "../types/supabase";

const supabase = createClient<Database>(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export default supabase;

//https://www.youtube.com/watch?v=5yR6ccq7cVQ

/*
Organizando .env files para uso local e em produção

https://dev.to/yanagisawahidetoshi/handling-environment-variables-in-vite-react-typescript-projects-694
*/
