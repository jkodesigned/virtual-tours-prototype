import Frame0 from "components/ui/Loading/frames/frame-0.svg";
import Frame1 from "components/ui/Loading/frames/frame-1.svg";
import Frame2 from "components/ui/Loading/frames/frame-2.svg";
import Frame3 from "components/ui/Loading/frames/frame-3.svg";
import Frame4 from "components/ui/Loading/frames/frame-4.svg";
import Frame5 from "components/ui/Loading/frames/frame-5.svg";
import Frame6 from "components/ui/Loading/frames/frame-6.svg";
import { useState } from "react";
import { useInterval } from "react-use";

const DELAY = 400; // ms

const frames = [<Frame0 />, <Frame1 />, <Frame2 />, <Frame3 />, <Frame4 />, <Frame5 />, <Frame6 />];
const lastFrame = frames.length - 1;

export function Loading() {
  const [frame, setFrame] = useState(0);

  useInterval(() => setFrame((frame) => (frame === lastFrame ? 0 : frame + 1)), DELAY);

  return <div>{frames[frame]}</div>;
}
