export type ProjectsTypes = {
  id: string;
  img?: string;
  title: string;
  description: string;
  time: string;
  client: string;
  repo: string;
  role?: string[];
  site: string;
  tags?: string[];
};
export type BlogTypes = {
  title: string;
  cover_img: string;
  description: string;
  slug: string;
  tags: string[];
  created_at: string;
};
