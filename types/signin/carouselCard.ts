import { ReactNode } from "react";

/**
 * Interface for cards used inside carousel
 * @property {ReactNode} icon - Icon of Card
 * @property {string} title - Title of card
 * @property {string} description - Description of card
 */
export interface CarouselCardProps {
  /** Icon , in React Component Format */
  icon: ReactNode;
  /** Title of Card */
  title: string;
  /** Description of Card  */
  description?: string;
}
