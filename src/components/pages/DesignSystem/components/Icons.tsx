import { icons } from "components/ui/Icon/imports";
import { Icon, IconType } from "components/ui";

const iconsKeys = Object.keys(icons) as IconType[];

export function Icons() {
  return (
    <div className={"flex -mb-4 flex flex-wrap max-w-sm"}>
      {iconsKeys.map((icon) => (
        <div key={icon} title={icon} className={"mr-6 mb-4 w-10 h-10"}>
          <Icon type={icon} />
        </div>
      ))}
    </div>
  );
}
