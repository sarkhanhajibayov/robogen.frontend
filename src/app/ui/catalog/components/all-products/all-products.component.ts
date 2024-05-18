import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-products',
  standalone: true,
  imports: [],
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.scss'
})
export class AllProductsComponent {
  cards = [
    // {title:"IM.Master 9804_MK",text:"2 Fast 2 Furious Nissan Skyline GT-R (R34)",src:"assets/images/site/product-img.jpg",src_hover:"assets/images/site/product-img-hover.jpg",sum:"$239.99"},
    {title:"Chevrolet Corvette 1961",text:"Everyone Is Awesome",src:"assets/images/site/car-1.jpg",src_hover:"assets/images/site/car-2.jpg",sum:"$239.99"},
    {title:"IM.Master 9804_MK",text:"Everyone Is Awesome",src:"assets/images/site/product-figures.png",src_hover:"assets/images/site/product-figures-hover.png",sum:"$239.99"},
    {title:"IM.Master 9804_MK",text:"2 Fast 2 Furious Nissan Skyline GT-R (R34)",src:"assets/images/site/product-stich.png",src_hover:"assets/images/site/product-stich-hover.png",sum:"$239.99"},
    {title:"IM.Master 9804_MK",text:"2 Fast 2 Furious Nissan Skyline GT-R (R34)",src:"assets/images/site/product-titanic.png",src_hover:"assets/images/site/product-titanic-hover.png",sum:"$239.99"}
  ]
  constructor(private router:Router){

  }

  goToProduct(){
    this.router.navigate(['product'])
  }
}
