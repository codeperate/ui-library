import { Modifier, OptionsGeneric } from '@popperjs/core/lib/types';
export interface CdpTooltipProps {
  display: boolean;
}

export interface CdpTooltipConfig {
  showEvents?: string[];
  hideEvents?: string[];
  option?: Partial<OptionsGeneric<Partial<Modifier<any, any>>>>;
  classList?: {
    tooltip?: string;
    arrow?: string;
  };
  arrow?: boolean;
}
