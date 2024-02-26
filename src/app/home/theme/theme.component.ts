import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-theme',
  standalone: true,
  imports: [SlickCarouselModule],
  templateUrl: './theme.component.html',
  styleUrl: './theme.component.scss'
})
export class ThemeComponent {
  slides = [
    { img: 'assets/images/site/theme-disney.png' },
    { img: 'assets/images/site/theme-dreamz.jpg' },
    { img: 'assets/images/site/theme-ideas.png' },
    { img: 'assets/images/site/theme-ninjago.png' },
    { img: 'assets/images/site/theme-potter.jpg' },
    { img: 'assets/images/site/theme-star.jpg' },
    { img: 'assets/images/site/theme-technic.jpg' },

  ];
  slideConfig = {
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
  };
}
