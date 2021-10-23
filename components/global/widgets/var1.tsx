import { Text, Divider } from "@mantine/core";
import ListVar1 from "../lists/var-1";
import { CB_WidgetProps } from "types/global/widgets";

/**
 * Renders List with Comments or Article
 *
 * @param {string} title - Title of Widget
 * @param {array} data - Data of Widget Comments[]|Articles[]
 * @param {ReactNode} footer - Footer in Component Format - optional
 * @param {ReactNode} header - Header in Component Format - optional
 * @param {string} className - optional Classname to append to container
 */
const WidgetVar1: React.FC<CB_WidgetProps> = ({
  title,
  data,
  footer,
  className,
  header,
}) => {
  return (
    <div
      className={
        `mt-6 xs:mt-2 xxs:mt-2 sm:mt-2 bg-transparent min-w-[320px] xxs:min-w-[80%]` +
        " " +
        className
      }
    >
      <div>
        <Text className="font-semibold ml-2">{title}</Text>
        {data.map((data: any, index: number) => (
          <ListVar1
            url={`/data/${data.slug}`}
            key={index}
            widget
            header={header}
            title={data.title ? data.title : data.content}
            footer={footer}
          />
        ))}
      </div>
    </div>
  );
};

export default WidgetVar1;
