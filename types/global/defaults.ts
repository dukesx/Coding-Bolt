import { Session, UserCredentials } from "@supabase/gotrue-js";
import { SupabaseClient } from "@supabase/supabase-js";
import { IconProps } from "phosphor-react";
import React, { ReactNode } from "react";

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
 * Shared Interface for List Components
 * @property {ReactNode} icon
 * @property {string} title
 * @property {string} description
 * @property {ReactNode} header
 * @property {ReactNode} footer
 */
export interface ListProps {
  /** Icon , in React Component Format */
  icon: ReactNode;
  /** Title of List */
  title: string;
  /** Description  */
  description?: string;
  /** Header Component, above title */
  header?: ReactNode;
  /** Footer Component, below description */
  footer?: ReactNode;
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
