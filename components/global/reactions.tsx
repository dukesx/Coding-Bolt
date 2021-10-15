import { Heart } from "phosphor-react";
import { Text, Divider } from "@mantine/core";
import {
  ReactionContainerProps,
  ReactionLayout,
  ReactionProps,
} from "types/global/defaults";
export const ReactionsVertical = () => {
  return {
    /** */
  };
};

/**
 * The Main Reaction component
 * @summary To be used inside Horizontal or Vertical Container
 * @param {ReactNode} icon - Icon in Component Format
 * @param {string} label - label
 * @param {string} iconColor - Mantine color
 * @param {ReactLayout} layout - Custom or Normal
 */
export const Reaction: React.FC<ReactionProps> = ({
  icon,
  label,
  iconColor,
  layout,
}) => {
  return (
    <div className="flex">
      <div className={layout == ReactionLayout.Custom ? "-ml-1.5" : "mx-2"}>
        <Text color={iconColor}>{icon}</Text>
        {label}
      </div>
    </div>
  );
};

/**
 * Horizontal Container for Reactions
 * @summary Can be used for single page article or widgets
 * @param {ReactNode} children
 * @param {number} reacts
 */
export const ReactionsHorizontal: React.FC<ReactionContainerProps> = ({
  children,
  reacts,
}) => {
  return (
    <div className="flex items-center">
      {children} <Divider className="mx-1.5 w-[15px]" />{" "}
      <Text className="text-sm">{reacts}</Text>
    </div>
  );
};
