export interface IBlog {
  _id: string;
  auth_id: {
    fullName: string;
    avatar: string;
  };
  title: string;
  slug: string;
  description: string;
  short_description: string;
  image: string;
  tags: string[];
  published_at: string;
}
