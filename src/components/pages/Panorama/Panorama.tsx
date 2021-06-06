import { useState } from "react";
import { useRouter } from "next/router";
import { LoadingScreen } from "components/shared";
import { Header, PanoramaViewer } from "components/pages/Panorama/components";
import s from "components/pages/Panorama/Panorama.module.css";

export function Panorama() {
  const { query } = useRouter();

  // TODO: validate query.id
  console.log(query.id);

  const [loading, setLoading] = useState(true);

  return (
    <div className={s.page}>
      <Header parent={mock.castle} title={mock.chamber} />

      <PanoramaViewer onReady={() => setLoading(false)} />

      {loading && <LoadingScreen />}
    </div>
  );
}

const mock = {
  castle: "Hrad Bezděz",
  chamber: "Královská komnata",
};
