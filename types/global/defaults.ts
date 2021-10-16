import { Session, UserCredentials } from "@supabase/gotrue-js";
import { SupabaseClient } from "@supabase/supabase-js";
import { ReactNode } from "react";

/**
 * Custom Image Component
 * @see https://nextjs.org/docs/api-reference/next/image
 * @example
 * import Image from "components/global/image"
 * @author Muhammad Afzaal Afridi <uthreviews@gmail.com>
 */
export interface ImageProps {
  /** Name of File on Server */
  name: string;
  /** Alt Attribute of Image */
  alt?: string;
  /** Style Object
   * @example
   * //returns style object
   *  {
   *  //CSS Properties
   *  backgroundColor: "red"
   *  }
   */
  style?: any;
  /** Width of Image */
  width?: number;
  /** Height of Image */
  height?: number;
  /** Classes to be attached to image */
  className?: string;
  /** Blurhash/Base64 of Image */
  hash?: string;
  /** Should the image have cover like proportions like on FB Cover ? */
  cover?: boolean;
  /** Should NextJS preload the image during Build ? */
  preload?: boolean;
  /** The Caption of Image */
  caption?: string;
  /** x and y coordinates object for cropping
   * @type {object}
   * @property {number} x - X axis cropping value
   * @property {number} y - Y axis cropping value
   */
  crop?: {
    x: number;
    y: number;
  };
  /** Should adjust to an avatar ? */
  avatar?: boolean;
  /** Should fill the entire container ?
   * @type {boolean}
   */
  fill?: boolean;
}

/**
 * Interface for Nav Component
 * @author Muhammad Afzaal Afridi <uthreviews@gmail.com>
 */
export interface NavProps {
  /**
   * Session variable
   * @see Session from supabase/gotrue-js
   */
  session?: Session;
  /**
   * The Supabase Client
   */
  supabase?: SupabaseClient;
}

/**
 * Interface for Signin Component
 * @property {UserCredentials} user - Optional
 */
export interface SigninProps {
  /**
   * Contains user name,id etc
   */
  user?: UserCredentials;
}

/**
 * Interface for Reaction Component
 */

/**
 * Reaction Layout Enum
 * @property Normal
 * @property Custom
 */
export enum ReactionLayout {
  Normal,
  Custom,
}

/**
 * Interface for Reactions
 * @property {string} label - for labeling reactions
 * @property {string} iconColor - Mantine Color Name
 * @property {ReactNode} icon - Icon in React Component Format
 * @property {ReactionLayout} layout - Layout in enum , custom | normal
 */
export interface ReactionProps {
  /**
   * Label for Reaction
   * */
  label?: string;
  /** Color of the icon */
  iconColor?: string;
  /** Icon for Reaction in React Node Format */
  icon: ReactNode;
  /** Layout for icons */
  layout: ReactionLayout;
}

/**
 * Interface for Reaction Container Component
 * @property {ReactNode} children
 * @property {number} reacts
 *
 */
export interface ReactionContainerProps {
  /** Reactions */
  children?: ReactNode;
  /** Total reactions number */
  reacts: number;
}

export interface Like {
  id?: string;
  created?: Date;
  author: Author[];
}

export interface Comment {
  id?: string;
  author: Author;
  content: string;
  article: Article;
  likes: Like[];
}

export interface Reaction {
  id?: string;
  name: string;
  icon: ReactNode;
  author: Author;
}

export interface Author {
  created?: Date;
  id?: string;
  name: string;
  image: string;
  url: string;
}
export interface Article {
  id?: string;
  title: string;
  link: string;
  cover?: string;
  author: Author;
  reactions: Reactions;
  created?: Date;
}

export interface Reactions {
  total: number;
  array: Reaction[];
}
