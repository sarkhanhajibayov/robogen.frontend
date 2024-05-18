import { Component } from '@angular/core';
import { NewArrivalsComponent } from './components/new-arrivals/new-arrivals.component';
import { AdvantageComponent } from './components/advantage/advantage.component';
import { BestForTodayComponent } from './components/best-for-today/best-for-today.component';
import { ThemeComponent } from './components/theme/theme.component';
import { SearchComponent } from './components/search/search.component';
import { SliderComponent } from './components/slider/slider.component';

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
