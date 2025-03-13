import {
  booleanAttribute,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  input,
} from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-swiper-image-wrapper',
  imports: [NgClass],
  templateUrl: './swiper-image-wrapper.component.html',
  styleUrl: './swiper-image-wrapper.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SwiperImageWrapperComponent {
  public isOnlyMobile = input(false, { transform: booleanAttribute });
  public images = input<any>([]);
  public slidersView = input(1);
}
