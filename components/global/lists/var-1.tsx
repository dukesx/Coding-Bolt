import { CB_ListProps } from "../../../types/global/defaults";
import { Text } from "@mantine/core";

/**
 *  List Component with icon and title, suitable for menus
 * @param {string} title
 * @param {ReactNode} icon
 */
const ListVar1: React.FC<CB_ListProps> = ({ title, icon }) => {
  return (
    <div className="mt-0 font-medium text-xs cursor-pointer">
      <div className="flex items-center p-3 hover:bg-manLightHover dark:hover:bg-manDarkHover">
        <div className="mr-2">{icon}</div>
        <div>
          <Text className="text-sm">{title}</Text>
        </div>
      </div>
    </div>
  );
};

export default ListVar1;
