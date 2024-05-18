import { Component } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
export interface UserElement {
  name: string;
  email: string;

}

const ELEMENT_DATA: UserElement[] = [
  {name: 'Hydrogen',  email: 'H'},
  {name: 'Helium',  email: 'He'},

];
@Component({
  selector: 'app-users',
  standalone: true,
  imports: [MatPaginator,MatMenuModule,MatTableModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  displayedColumns: string[] = ['name', 'email',"operation"];
  dataSource = ELEMENT_DATA;
}
