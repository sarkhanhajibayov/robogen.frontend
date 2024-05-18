import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [SlickCarouselModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent {
  slides = [
    { img: 'assets/images/site/bg-architecture.webp' },
    { img: 'assets/images/site/bg-animals.webp' },
    { img: 'assets/images/site/bg-avatar.webp' },
    { img: 'assets/images/site/bg-batman.webp' },
    { img: 'assets/images/site/bg-botanica.webp' },
    { img: 'assets/images/site/bg-brickheadz.webp' },
    { img: 'assets/images/site/bg-cart.webp' },
    { img: 'assets/images/site/bg-city.webp' },
    { img: 'assets/images/site/bg-classic.webp' },
    { img: 'assets/images/site/bg-creator.webp' },
    { img: 'assets/images/site/bg-dino.webp' },
    { img: 'assets/images/site/bg-disney.webp' },
    { img: 'assets/images/site/bg-duplo.webp' },
    { img: 'assets/images/site/bg-friends.webp' },
    { img: 'assets/images/site/bg-harry.webp' },
    { img: 'assets/images/site/bg-ideas.webp' },
    { img: 'assets/images/site/bg-starwars.webp' },
    { img: 'assets/images/site/bg-technic.webp' },


  ];
  slideConfig = {
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
  };
}
