import { Component, OnInit } from '@angular/core';
import { GalleryItem, GalleryModule, ImageItem } from 'ng-gallery';
import { StarRatingComponent } from '../star-rating/star-rating.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [GalleryModule,StarRatingComponent
  ],
  providers:[
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit{
  items!: GalleryItem[];

  ngOnInit(): void {
    this.items = [
      new ImageItem({ src: "assets/images/site/car-1.jpg", thumb: 'assets/images/site/car-1.jpg' }),
      new ImageItem({ src: "assets/images/site/car-2.jpg", thumb: 'assets/images/site/car-2.jpg' }),
      new ImageItem({ src: "assets/images/site/car-3.jpg", thumb: 'assets/images/site/car-3.jpg' }),
      new ImageItem({ src: "assets/images/site/car-4.jpg", thumb: 'assets/images/site/car-4.jpg' }),
      new ImageItem({ src: "assets/images/site/car-5.jpg", thumb: 'assets/images/site/car-5.jpg' }),
      new ImageItem({ src: "assets/images/site/car-6.jpg", thumb: 'assets/images/site/car-6.jpg' }),
      new ImageItem({ src: "assets/images/site/car-7.jpg", thumb: 'assets/images/site/car-7.jpg' }),

    ];  }

}
