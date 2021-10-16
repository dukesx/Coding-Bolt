import { ReactNode } from "react";
import { Article, Reactions } from "./defaults";

export interface CB_WidgetProps {
  title: string;
  withComments: boolean;
  withArticles: boolean;
  reactions?: Reactions;
  header?: ReactNode;
  footer?: ReactNode;
  comments?: Comment[];
  articles?: Article[];
}
