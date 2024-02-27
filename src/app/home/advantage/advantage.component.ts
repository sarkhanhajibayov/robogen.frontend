import { Component } from '@angular/core';

@Component({
  selector: 'app-advantage',
  standalone: true,
  imports: [],
  templateUrl: './advantage.component.html',
  styleUrl: './advantage.component.scss'
})
export class AdvantageComponent {
advantages = [
  {
    img:"assets/images/icons/icon_shipping.svg",
    title:"Fast And Free Delivery",
    text:"Free delivery for all orders over $140"
  },
  {
    img:"assets/images/icons/icon_headphone.svg",
    title:"24/7 Customer Support",
    text:"Friendly 24/7 customer support"
  },
  {
    img:"assets/images/icons/icon_shield.svg",
    title:"Money Back Guarantee",
    text:"We return money within 30 days"
  }
]
}
