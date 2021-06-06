import { useEffect } from "react";
import { viewer } from "viewer";
import s from "components/pages/Panorama/components/PanoramaViewer/PanoramaViewer.module.css";

interface Props {
  onReady?: () => void;
}

export default function PanoramaViewer({ onReady }: Props) {
  useEffect(() => {
    viewer.init("/panorama/bezdez/kings_chamber.jpg", onReady);
  }, [onReady]);

  return <div id={"viewer"} className={s.viewer} />;
}
