import { CB_ListProps } from "../../../types/global/lists";
import { Text } from "@mantine/core";
import Link from "next/link";
/**
 *  List Component with icon and title, suitable for menus
 * @param {string} title
 * @param {ReactNode} icon
 */
const ListVar1: React.FC<CB_ListProps> = ({
  title,
  icon,
  header,
  footer,
  widget,
  url,
}) => {
  return (
    <div
      className={
        (widget ? " " : "cursor-pointer ") + "mt-0 font-medium text-xs"
      }
    >
      {header}
      <div
        className={
          (widget
            ? " "
            : "hover:bg-manLightHover dark:hover:bg-manDarkHover ") +
          "flex items-center p-3"
        }
      >
        {icon ? <div className="mr-2">{icon}</div> : null}
        <div>
          <Link href={url} passHref>
            <Text component="a" className="text-sm">
              {title}
            </Text>
          </Link>
        </div>
      </div>
      {footer}
    </div>
  );
};

export default ListVar1;
