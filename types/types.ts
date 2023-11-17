// Tipos usados no projeto

export type MaterialType = {
  title: string;
  subtitle: string;
  url: string;
};

export type CourseType = {
  id: number;
  nome: string;
  codigo: number;
  diario_url?: string;
  gsa_url?: string;
  created_at: string;
};
