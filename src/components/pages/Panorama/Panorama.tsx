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

  const onReady = () => {
    window.setTimeout(() => setLoading(false), 1000);
  };

  return (
    <div className={s.page}>
      <Header parent={mock.castle} title={mock.chamber} />

      <PanoramaViewer onReady={onReady} />

      {loading && <LoadingScreen />}
    </div>
  );
}

const mock = {
  castle: "Hrad Bezděz",
  chamber: "Královská komnata",
};
