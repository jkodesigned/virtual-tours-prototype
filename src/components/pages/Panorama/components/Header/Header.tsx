import { BackButton } from "components/pages/Panorama/components/BackButton/BackButton";
import { HeaderButton } from "components/pages/Panorama/components/HeaderButton/HeaderButton";
import s from "components/pages/Panorama/components/Header/Header.module.css";

interface Props {
  parent: string;
  title: string;
}

export function Header({ parent, title }: Props) {
  return (
    <header className={s.header}>
      <BackButton className={s.back}>{parent}</BackButton>

      <div className={s.title}>
        <h1 className={s.heading}>{title}</h1>

        <div className={s.controls}>
          <HeaderButton icon={"information"} />
          <HeaderButton icon={"sound_max"} />
        </div>
      </div>
    </header>
  );
}
