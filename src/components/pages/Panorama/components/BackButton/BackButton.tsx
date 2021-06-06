import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";
import { Icon } from "components/ui";
import s from "components/pages/Panorama/components/BackButton/BackButton.module.css";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
}

export function BackButton({ children, className, ...props }: Props) {
  return (
    <button className={clsx(s.button, className)} {...props}>
      <Icon type={"arrow_left"} className={s.icon} />
      <span className={s.text}>{children}</span>
    </button>
  );
}
