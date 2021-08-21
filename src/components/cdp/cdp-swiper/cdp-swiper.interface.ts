import { SwiperOptions } from 'swiper';
export interface CdpSwiperConfig {
  option?: SwiperOptions;
  classList?: {
    host?: string;
  };
  stopPropagation?:boolean;
}
export interface CdpSwiperProps {
  slideTo?: number;
}
