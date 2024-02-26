import { Component } from '@angular/core';
import { HeaderComponent } from './fixed-part/header/header.component';
import { HeaderMenuComponent } from './fixed-part/header-menu/header-menu.component';
import { SliderComponent } from './slider/slider.component';
import { SearchComponent } from './search/search.component';
import { ThemeComponent } from './theme/theme.component';
import { BestForTodayComponent } from './best-for-today/best-for-today.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    HeaderMenuComponent,
    SliderComponent,
    SearchComponent,
    ThemeComponent,
    BestForTodayComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
