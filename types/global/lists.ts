/**
 * Shared Interface for List Components
 * @property {ReactNode} icon
 * @property {string} title
 * @property {string} description
 * @property {ReactNode} header
 * @property {ReactNode} footer
 */
import React, { ReactNode } from "react";

export interface CB_ListProps {
  /** Icon , in React Component Format */
  icon?: ReactNode;
  /** Title of article */
  title: string;
  /** Description of article  */
  description?: string;
  /** Url of List Item */
  url: string;
  /** Header Component, above title */
  header?: ReactNode;
  /** Footer Component, below description */
  footer?: ReactNode;
  /** Article Cover */
  image?: {
    name: string;
  };
  /** If it is being used in widget, turn off hover */
  widget?: boolean | false;
}

/**
 * Interface for List Headers
 * @property {object} icon - icon used in header
 * @property {object} category - category name and url
 * @property {object} team - team/page name and url
 */
export interface ListHeaderProps {
  /** Category Details */
  category: {
    /** Title of Category */
    title: string;
    /** Url to category Page */
    url: string;
    /** Icon for Category */
    icon: {
      component: ReactNode;
      color: string;
    };
  };
  /** Team Details */
  team?: {
    /** Team Title */
    title?: string | "";
    /** Team url */
    url?: string | "";
  };
}

/**
 * Interface for List Footers
 * @property {boolean} bolted - has user bolted it ?
 * @property {boolean} bookmarked - has user bookmarked it ?
 * @property {object} author - author of article, with name and image url
 */
export interface ListFooterProps {
  /** Has user bolted it ? */
  bolted: boolean | false;
  /** Has user bookmarked it ? */
  bookmarked: boolean | false;
  /** Author of article */
  author: {
    /** Author Name */
    name: string;
    /** Author Profile Pic name/url */
    image: string;
  };
}
