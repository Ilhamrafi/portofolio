// lib/types/project.ts
export interface ProjectDetail {
  id: number;
  title: string;
  categories: string[];
  description: string;
  tags: string[];
  image: string;
  link?: string;
  github?: string;
  clientBackground?: string;
  projectOverview?: string;
  solution?: string[];
  result?: string;
  screenshots?: string[];
}
