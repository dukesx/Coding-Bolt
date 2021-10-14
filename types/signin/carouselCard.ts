import { ReactNode } from "react";

export interface CarouselCardProps {
  /** Icon , in React Component Format */
  icon: ReactNode;
  /** Title of List */
  title: string;
  /** Description  */
  description?: string;
  /** Header Component, above title */
}
