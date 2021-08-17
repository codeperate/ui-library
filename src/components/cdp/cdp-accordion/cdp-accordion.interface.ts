export interface CdpAccordionProps {
  /**
   * @default "false"
   * @description "Control displaying accordion content or not"
   */
  display: boolean;
}
export interface CdpAccordionConfig {
  classList?: {
    /**
     * @default "transition-all duration-500 ease-in-out overflow-hidden"
     * @description "Control transition animation of content element"
     */
    content?: string;
    /**
     * @default "expanded"
     * @description "Appended class to host element if expanded"
     */
    expanded?: string;
  };
  /**
   * @default "100vh"
   * @description "Max height value for transition animation"
   */
  maxHeight?: string;
  toggle?: boolean;
}
