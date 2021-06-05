import dynamic from "next/dynamic";

export const icons = {
  arrow_down: dynamic(() => import("components/ui/Icon/icons/arrow-down.svg")),
  arrow_left: dynamic(() => import("components/ui/Icon/icons/arrow-left.svg")),
  arrow_right: dynamic(() => import("components/ui/Icon/icons/arrow-right.svg")),
  arrow_up: dynamic(() => import("components/ui/Icon/icons/arrow-up.svg")),
  back: dynamic(() => import("components/ui/Icon/icons/back.svg")),
  check: dynamic(() => import("components/ui/Icon/icons/check.svg")),
  close: dynamic(() => import("components/ui/Icon/icons/close.svg")),
  close_full_screen: dynamic(() => import("components/ui/Icon/icons/close-full-screen.svg")),
  full_screen: dynamic(() => import("components/ui/Icon/icons/full-screen.svg")),
  information: dynamic(() => import("components/ui/Icon/icons/information.svg")),
  pause: dynamic(() => import("components/ui/Icon/icons/pause.svg")),
  pin: dynamic(() => import("components/ui/Icon/icons/pin.svg")),
  pin_border_able: dynamic(() => import("components/ui/Icon/icons/pin-border-able.svg")),
  pin_border_disable: dynamic(() => import("components/ui/Icon/icons/pin-border-disable.svg")),
  placeholder: dynamic(() => import("components/ui/Icon/icons/placeholder.svg")),
  play: dynamic(() => import("components/ui/Icon/icons/play.svg")),
  play_border: dynamic(() => import("components/ui/Icon/icons/play-border.svg")),
  settings: dynamic(() => import("components/ui/Icon/icons/settings.svg")),
  sound_max: dynamic(() => import("components/ui/Icon/icons/sound-max.svg")),
  stop: dynamic(() => import("components/ui/Icon/icons/stop.svg")),
};
