import { Component } from '@angular/core';
import { NewArrivalsComponent } from './new-arrivals/new-arrivals.component';
import { AdvantageComponent } from './advantage/advantage.component';
import { BestForTodayComponent } from './best-for-today/best-for-today.component';
import { ThemeComponent } from './theme/theme.component';
import { SearchComponent } from './search/search.component';
import { SliderComponent } from './slider/slider.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [    SliderComponent,
    SearchComponent,
    ThemeComponent,
    BestForTodayComponent,
    AdvantageComponent,
    NewArrivalsComponent,],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
