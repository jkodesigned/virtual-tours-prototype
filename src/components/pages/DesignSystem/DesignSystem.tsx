import { Colors } from "components/pages/DesignSystem/components/Colors";
import { Typography } from "components/pages/DesignSystem/components/Typography";
import { Icons } from "components/pages/DesignSystem/components/Icons";
import { Loading } from "components/ui";

export function DesignSystem() {
  return (
    <div className={"p-4"}>
      <Colors />

      <hr className={"text-bf-75 mt-6 mb-4"} />

      <Typography />

      <hr className={"text-bf-75 mt-4 mb-6"} />

      <Icons />

      <hr className={"text-bf-75 mt-4 mb-6"} />

      <Loading />
    </div>
  );
}
