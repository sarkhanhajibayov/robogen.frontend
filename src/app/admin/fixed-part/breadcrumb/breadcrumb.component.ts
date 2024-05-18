import { Component } from '@angular/core';
import { Ng7DynamicBreadcrumbModule } from 'ng7-dynamic-breadcrumb';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [Ng7DynamicBreadcrumbModule],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss'
})
export class BreadcrumbComponent {

}
