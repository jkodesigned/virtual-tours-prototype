import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";
import { Icon, IconType } from "components/ui";
import s from "components/pages/Panorama/components/HeaderButton/HeaderButton.module.css";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: IconType;
}

export function HeaderButton({ icon, className, ...props }: Props) {
  return (
    <button className={clsx(s.button, className)} {...props}>
      <Icon type={icon} />
    </button>
  );
}
