export interface ComMenuProps {
  display?: boolean;
}
export interface CdpMenuConfig {
  width?: string
  initialDisplay?: boolean;
  breakPoint?: string | 'sm' | 'md' | 'lg' | 'xl';
  collapsible?: boolean;
  collapse?: boolean;
  sensitivity?: number;
  classList?: {
    /** @default */
    host?: string;
    /** @default  "sticky h-screen flex top-0 flex-col overflow-y-auto p-2 transition-transform" */
    container?: string;
    /** @default  "fixed h-screen flex top-0 flex-col overflow-y-auto p-2 transition-transform bg-white bg-opacity-90" */
    mobileContainer?: string;
    /** @default "fixed w-screen h-screen bg-black bg-opacity-50" */
    background?: string;
  };
}
export interface CdpMenuProps {
  display?: boolean
}
