import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../fixed-part/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [BreadcrumbComponent],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss'
})
export class CatalogComponent {

}
