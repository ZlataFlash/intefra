import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CartComponent} from '../components/cart/cart.component';
import {CardComponent} from '../components/card/card.component';
import {OrderCardComponentComponent} from '../components/order-card/order-card.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CartComponent, CardComponent, OrderCardComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
