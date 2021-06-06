import { useState } from "react";
import { useRouter } from "next/router";
import { Header } from "components/pages/Panorama/components";
import s from "components/pages/Panorama/Panorama.module.css";

export function Panorama() {
  const { query } = useRouter();

  // TODO: validate query.id
  console.log(query.id);

  const [loading, setLoading] = useState(true);

  return (
    <div className={s.page}>
      <Header parent={mock.castle} title={mock.chamber} />

      <div className={s.viewer} />
    </div>
  );
}

const mock = {
  castle: "Hrad Bezděz",
  chamber: "Královská komnata",
};
