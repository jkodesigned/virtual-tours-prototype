import { useEffect } from "react";
import s from "components/pages/Panorama/components/PanoramaViewer/PanoramaViewer.module.css";

import("viewer");

interface Props {
  onReady?: () => void;
}

export default function PanoramaViewer({ onReady }: Props) {
  useEffect(() => {
    if (!onReady) return;

    window.setTimeout(onReady, 5000);
  }, [onReady]);

  return <div id={"viewer"} className={s.viewer} />;
}
