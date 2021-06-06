import { useState } from "react";
import { useInterval } from "react-use";
import clsx from "clsx";
import s from "components/ui/Loading/Loading.module.css";

const DELAY = 500; // ms

const frames = [
  [clsx(s.topLeft), clsx(s.bottomRight), clsx(s.topRight), clsx(s.bottomLeft)],
  [clsx(s.topRight, s.green), clsx(s.bottomLeft, s.green), clsx(s.topRight), clsx(s.bottomLeft)],
  [clsx(s.topRight), clsx(s.bottomLeft), clsx(s.topLeft), clsx(s.bottomRight)],
  [clsx(s.bottomRight, s.green), clsx(s.topLeft, s.green), clsx(s.topLeft), clsx(s.bottomRight)],
  [clsx(s.bottomRight), clsx(s.topLeft), clsx(s.bottomLeft), clsx(s.topRight)],
  [clsx(s.topRight), clsx(s.bottomLeft), clsx(s.bottomRight), clsx(s.topLeft)],
  [clsx(s.topRight, s.green), clsx(s.bottomLeft, s.green), clsx(s.bottomLeft), clsx(s.topRight)],
];

const lastFrame = frames.length - 1;

export function Loading() {
  const [frame, setFrame] = useState(0);

  useInterval(() => setFrame((frame) => (frame === lastFrame ? 0 : frame + 1)), DELAY);

  return (
    <div className={s.container}>
      <div className={clsx(s.letter, frames[frame][0])}>V</div>
      <div className={clsx(s.letter, frames[frame][1])}>H</div>
      <div className={clsx(s.box, frames[frame][2])} />
      <div className={clsx(s.box, frames[frame][3])} />
    </div>
  );
}
