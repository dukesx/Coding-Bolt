import { ReactNode } from "react";

interface Author {
  created?: Date;
  id?: string;
  name: string;
  image: string;
  url: string;
}
interface Article {
  id?: string;
  title: string;
  link: string;
  cover?: string;
  author: Author;
  reactions: Reactions;
  created?: Date;
}

// interface Article {
//   title: string;
//   excerpt: string;
//   author: Author | Author[];
//   published: Date;
//   updated_at?: Date;
//   cover: {
//     url: string;
//   };
// }

interface Like {
  id?: string;
  created?: Date;
  author: Author[];
}

interface Comment {
  id?: string;
  author: Author;
  content: string;
  article: Article;
  likes: Like[];
}

interface Reaction {
  id?: string;
  name: string;
  icon: ReactNode;
  author: Author;
}

interface Reactions {
  total: number;
  array: Reaction[];
}

export interface CB_WidgetProps {
  title: string;
  reactions?: Reactions;
  header?: ReactNode;
  footer?: ReactNode;
  comments?: Comment[];
  articles?: Article[];
}
