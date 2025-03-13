import { Component } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { BrandsComponent } from '../components/brands/brands.component';
import { CollectionComponent } from '../components/collection/collection.component';
import { NewClothesComponent } from '../components/new-clothes/new-clothes.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    HeaderComponent,
    BrandsComponent,
    CollectionComponent,
    NewClothesComponent,
  ],
  styleUrl: './app.component.scss',
})
export class AppComponent {}
