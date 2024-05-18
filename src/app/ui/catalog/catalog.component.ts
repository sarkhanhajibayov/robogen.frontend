import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../fixed-part/breadcrumb/breadcrumb.component';
import { RouterOutlet } from '@angular/router';
import { SliderComponent } from './components/slider/slider.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [BreadcrumbComponent,RouterOutlet,SliderComponent,SidenavComponent],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss'
})
export class CatalogComponent {

}
