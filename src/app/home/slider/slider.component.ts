import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [SlickCarouselModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
})
export class SliderComponent {
  slides = [
    { img: 'assets/images/site/slider-bricks.webp' },
    { img: 'assets/images/site/slider-dune.webp' },
    { img: 'assets/images/site/slider-eager.webp' },
  ];
  slideConfig = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
  };
}
