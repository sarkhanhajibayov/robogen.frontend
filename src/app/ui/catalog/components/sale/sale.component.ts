import { Component } from '@angular/core';

@Component({
  selector: 'app-sale',
  standalone: true,
  imports: [],
  templateUrl: './sale.component.html',
  styleUrl: './sale.component.scss'
})
export class SaleComponent {
  cards = [
    // {title:"IM.Master 9804_MK",text:"2 Fast 2 Furious Nissan Skyline GT-R (R34)",src:"assets/images/site/product-img.jpg",src_hover:"assets/images/site/product-img-hover.jpg",sum:"$239.99"},
    {title:"IM.Master 9804_MK",text:"Everyone Is Awesome",src:"assets/images/site/product-figures.png",src_hover:"assets/images/site/product-figures-hover.png",sum:"$239.99"},
    {title:"IM.Master 9804_MK",text:"2 Fast 2 Furious Nissan Skyline GT-R (R34)",src:"assets/images/site/product-stich.png",src_hover:"assets/images/site/product-stich-hover.png",sum:"$239.99"},
    {title:"IM.Master 9804_MK",text:"2 Fast 2 Furious Nissan Skyline GT-R (R34)",src:"assets/images/site/product-titanic.png",src_hover:"assets/images/site/product-titanic-hover.png",sum:"$239.99"}
  ]
}
