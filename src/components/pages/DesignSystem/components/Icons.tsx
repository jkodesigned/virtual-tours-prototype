import { icons } from "components/ui/Icon/imports";
import { Icon, IconType } from "components/ui";

const iconsKeys = Object.keys(icons) as IconType[];

export function Icons() {
  return (
    <>
      {iconsKeys.map((icon) => (
        <div key={icon} title={icon} className={"mr-6 mb-4"}>
          <Icon type={icon} />
        </div>
      ))}
    </>
  );
}
