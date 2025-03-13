import { Component } from '@angular/core';

@Component({
  selector: 'app-brands',
  imports: [],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.scss',
})
export class BrandsComponent {
  public brandsImages = [
    'images/brands/brunello.png',
    'images/brands/jacob_conen.png',
    'images/brands/kiton.png',
    'images/brands/piana.png',
    'images/brands/saint_laurent.png',
    'images/brands/santoni.png',
  ];
}
