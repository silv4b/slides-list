export type MaterialType = {
  title: string;
  subtitle: string;
  url: string;
};

export type ClassType = {
  id: number;
  nome: string;
  codigo: number;
  diario_url?: string;
  gsa_url?: string;
  created_at: string;
};

// TODO: Ver a abordagem recomendada para fazer esses tipos
