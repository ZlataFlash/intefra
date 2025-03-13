import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-collection',
  imports: [],
  templateUrl: './collection.component.html',
  styleUrl: './collection.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CollectionComponent {
  public images = [
    {
      src: '/images/mock/collection1.png',
      description:
        'Спортивный костюм Artigiani, футболка Artigiani, кеды Santoni',
    },
    {
      src: '/images/mock/collection2.png',
      description:
        'Пуховый жилет Kiton, джинсы Jacob Cohen, футболка Fedeli, кроссовки Valentino, бейсболка Kiton',
    },
    {
      src: '/images/mock/collection3.png',
      description:
        'Парка Artigiani, джемпер Artigiani,джинсы Jacob Cohen, челси Santoni',
    },
  ];
}
