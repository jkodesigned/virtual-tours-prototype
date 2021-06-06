import { SVGAttributes } from "react";
import { icons } from "components/ui/Icon/imports";

export type IconType = keyof typeof icons;

interface Props extends SVGAttributes<SVGElement> {
  type: IconType;
}

export function Icon({ type, ...props }: Props) {
  const Icon = icons[type];

  return <Icon fill="currentColor" width="100%" height="100%" {...props} />;
}
