export interface CdpMenuProps {
  /**
   * @default "false"
   * @description "Control display or not in mobile view."
   */
  display?: boolean;
}
export interface CdpMenuConfig {
  /**
   * @default "true"
   * @description "Display background or not in mobile mode"
   */
  background?: boolean;
  /**
   * @default "none"
   * @description "Quickly set the menu width. You can set it using classList if you need more complex control."
   */
  width?: string;
  /**
   * @default "0.5"
   * @description "Set the mobile menu sensitivity to swipe out."
   */
  sensitivity?: number;
  classList?: {
    /** @default  "h-full block relative" */
    host?: string;
    /** @default  "<md:transition-transform <md:translate-x-[-100%] transform sticky h-screen w-full top-0 overflow-y-auto" */
    container?: string;
    /** @default "<md:fixed md:hidden w-screen h-screen bg-black bg-opacity-50" */
    background?: string;
  };
}
