export interface ProjectsTypes {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  img: string;
  title: string;
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
