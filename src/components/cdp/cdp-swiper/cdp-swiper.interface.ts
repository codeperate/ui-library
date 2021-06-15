import { SwiperOptions } from 'swiper';
export interface CdpSwiperConfig {
  option?: SwiperOptions;
  classList?: {
    host?: string;
  };
}
export interface CdpSwiperProps {
  slideTo?: number;
}
