import { Component } from '@angular/core';
import { SectionWrapperComponent } from '../../shared/wrappers/section-wrapper/section-wrapper.component';
import { SwiperImageWrapperComponent } from '../../shared/wrappers/swiper-image-wrapper/swiper-image-wrapper.component';

@Component({
  selector: 'app-new-clothes',
  imports: [SectionWrapperComponent, SwiperImageWrapperComponent],
  templateUrl: './new-clothes.component.html',
  styleUrl: './new-clothes.component.scss',
})
export class NewClothesComponent {
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
