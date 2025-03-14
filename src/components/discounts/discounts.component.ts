import { Component } from '@angular/core';
import { SectionWrapperComponent } from '../../shared/wrappers/section-wrapper/section-wrapper.component';
import { SwiperImageWrapperComponent } from '../../shared/wrappers/swiper-image-wrapper/swiper-image-wrapper.component';

@Component({
  selector: 'app-discounts',
  imports: [SectionWrapperComponent, SwiperImageWrapperComponent],
  templateUrl: './discounts.component.html',
  styleUrl: './discounts.component.scss',
})
export class DiscountsComponent {
  public images = [
    {
      src: '/images/clothes/bag.png',
      description: 'Saint Laurent',
      width: 312,
      height: 312,
    },
    {
      src: '/images/clothes/boots.png',
      description: 'BRUNELLO CUCINELLI',
      width: 312,
      height: 312,
    },
    {
      src: '/images/clothes/shirt.png',
      description: 'Brunello Cucinelli',
      width: 312,
      height: 312,
    },
    {
      src: '/images/clothes/bag.png',
      description: 'Saint Laurent',
      width: 312,
      height: 312,
    },
    {
      src: '/images/clothes/boots.png',
      description: 'BRUNELLO CUCINELLI',
      width: 312,
      height: 312,
    },
    {
      src: '/images/clothes/shirt.png',
      description: 'Brunello Cucinelli',
      width: 312,
      height: 312,
    },
  ];
}
