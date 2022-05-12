export interface ProjectsTypes {
  id: number;
  createdAt: number;
  img: string;
  name: string;
  description: string;
  time: string;
  client: string;
  repo: string;
  role: string[];
  site: string;
}
export interface BlogTypes {
  title: string;
  cover_img: string;
  description: string;
  slug: string;
  tags: string[];
  created_at: string;
}
