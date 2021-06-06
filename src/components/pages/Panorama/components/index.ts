import dynamic from "next/dynamic";

export * from "components/pages/Panorama/components/Header/Header";

const PanoramaViewer = dynamic(() => import("components/pages/Panorama/components/PanoramaViewer/PanoramaViewer"), {
  ssr: false,
});

export { PanoramaViewer };
