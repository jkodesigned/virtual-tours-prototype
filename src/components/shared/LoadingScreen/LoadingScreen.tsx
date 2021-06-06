import { Loading } from "components/ui";
import s from "components/shared/LoadingScreen/LoadingScreen.module.css";

export function LoadingScreen() {
  return (
    <div className={s.container}>
      <div className={s.loading}>
        <Loading />
      </div>
      <p className={s.info}>{mock[0]}</p>
    </div>
  );
}

const mock = ["Věděli jste, že na Bezdězu měly být původně uloženy korunovační klenoty?"];
