export interface CdpModalProps {
  display?: boolean;
}
export interface CdpModalConfig {
  classList?: {
    /** @default  "absolute h-full w-full grid grid-cols-[repeat(auto-fit,minmax(0,min-content))] auto-rows-min place-content-center left-0 top-0 bg-black bg-opacity-80 backdrop-filter" */
    host?: string;
  };
  animation?: {
    /** @default  "animated animate-zoom-in" */
    open?: string | false;
    /** @default  "animated animate-zoom-out" */
    close?: string | false;
  };
  bgClose?: boolean;
}
