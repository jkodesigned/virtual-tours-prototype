declare module "*.svg" {
  import { FC, SVGAttributes } from "react";
  const src: FC<SVGAttributes<SVGElement>>;
  export default src;
}

declare module "*.png" {
  const src: string;
  export default src;
}
