import { Injectable } from '@angular/core';

// import Swiper core and required modules
import SwiperCore, {
  Autoplay,
  EffectCoverflow,
  EffectFade,
  Grid,
  Navigation,
  Pagination,
  Scrollbar,
  Thumbs,
} from 'swiper';
// install Swiper modules
SwiperCore.use([
  EffectCoverflow,
  EffectFade,
  Autoplay,
  Pagination,
  Navigation,
  Thumbs,
  Grid,
  Scrollbar,
]);

@Injectable({
  providedIn: 'root',
})
export class CarouselControlService {
  constructor() {}
}
