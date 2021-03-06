export interface CdpModalProps {
  display?: boolean;
}
export interface CdpModalConfig {
  classList?: {
    /** @default  "absolute h-full w-full flex items-center justify-center left-0 top-0 bg-black bg-opacity-80 backdrop-filter" */
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
