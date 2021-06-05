import { t } from "@lingui/macro";
import { Loading } from "components/ui";
import s from "components/pages/Home/Home.module.css";

export function Home() {
  return (
    <div className={s.container}>
      <h1 className={s.heading}>{t`virtual-tours`}</h1>
      <Loading />
    </div>
  );
}
