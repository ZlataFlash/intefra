import { TuiRoot } from "@taiga-ui/core";
import { Component } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { BrandsComponent } from '../components/brands/brands.component';
import { CollectionComponent } from '../components/collection/collection.component';
import { NewClothesComponent } from '../components/new-clothes/new-clothes.component';
import { BannersComponent } from '../components/banners/banners.component';
import { DiscountsComponent } from '../components/discounts/discounts.component';
import { NewsletterComponent } from '../components/newsletter/newsletter.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    HeaderComponent,
    BrandsComponent,
    CollectionComponent,
    NewClothesComponent,
    BannersComponent,
    DiscountsComponent,
    NewsletterComponent,
      TuiRoot
],
  styleUrl: './app.component.scss',
})
export class AppComponent {}
