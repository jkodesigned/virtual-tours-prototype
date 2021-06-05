import { Typography } from "components/pages/DesignSystem/components/Typography";
import { Icons } from "components/pages/DesignSystem/components/Icons";

export function DesignSystem() {
  return (
    <div>
      <div className={"p-4 mb-6"}>
        <Typography />
      </div>

      <div className={"p-4 flex flex-wrap max-w-sm"}>
        <Icons />
      </div>
    </div>
  );
}
