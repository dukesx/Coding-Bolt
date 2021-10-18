import { ReactNode } from "react";
import { Articles, Comments } from "./defaults";

/** Generic Interface for Widget Types
 * @property title - title of widget
 * @property className - classnames to append to container
 * @property header - header of widget
 * @property footer - footer of widget
 * @propert data - data to render inside widget
 */
export interface CB_WidgetProps {
  /** Title of Widget */
  title: string;
  /** Class for container */
  className?: string;
  /** Header of Widget */
  header?: ReactNode;
  /** Footer of widget */
  footer?: ReactNode;
  /** Data to render in Widget */
  data: Articles[] | Comments[];
}
