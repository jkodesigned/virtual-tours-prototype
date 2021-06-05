import { useState } from "react";
import { useInterval } from "react-use";
import { t } from "@lingui/macro";
import Image from "next/image";

const DELAY = 400; // ms

const frames = [
  "/images/loading/frame-0.png",
  "/images/loading/frame-1.png",
  "/images/loading/frame-2.png",
  "/images/loading/frame-3.png",
  "/images/loading/frame-4.png",
  "/images/loading/frame-5.png",
  "/images/loading/frame-6.png",
];

const lastFrame = frames.length - 1;

export function Loading() {
  const [frame, setFrame] = useState(0);

  useInterval(() => setFrame((frame) => (frame === lastFrame ? 0 : frame + 1)), DELAY);

  return <Image src={frames[frame]} alt={t`Loading`} width={120} height={120} />;
}
