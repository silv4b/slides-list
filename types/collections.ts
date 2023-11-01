import { Database } from "../types/supabase";

export type PostType = Database["public"]["Tables"]["material"]["Row"];
export type ClassType = Database["public"]["Tables"]["turmas"]["Row"];
