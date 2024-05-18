import { Component } from '@angular/core';

@Component({
  selector: 'app-new-arrivals',
  standalone: true,
  imports: [],
  templateUrl: './new-arrivals.component.html',
  styleUrl: './new-arrivals.component.scss'
})
export class NewArrivalsComponent {
  cards = [
    // {title:"IM.Master 9804_MK",text:"2 Fast 2 Furious Nissan Skyline GT-R (R34)",src:"assets/images/site/product-img.jpg",src_hover:"assets/images/site/product-img-hover.jpg",sum:"$239.99"},
    {title:"IM.Master 9804_MK",text:"Everyone Is Awesome",src:"assets/images/site/product-figures.png",src_hover:"assets/images/site/product-figures-hover.png",sum:"$239.99"},
    {title:"IM.Master 9804_MK",text:"LEGO® London Bus",src:"assets/images/site/product-bus.png",src_hover:"assets/images/site/product-bus-hover.png",sum:"$239.99"},
  ]
}
