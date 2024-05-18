import { Component, OnInit } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { CommonService } from '../../../services/common.service';
import { MatError, MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { BreadcrumbComponent } from '../../fixed-part/breadcrumb/breadcrumb.component';
import { MatDialog } from '@angular/material/dialog';
import { NewProductComponent } from '../../dialogs/new-product/new-product.component';
import { Router } from '@angular/router';
import { AlertifyService, MessageTypes } from '../../../services/alertify.service';
import { MatSpinner } from '@angular/material/progress-spinner';
import { ProductFilter } from '../../../models/products/product-filter';

@Component({
  selector: 'app-all-products',
  standalone: true,
  imports: [MatPaginator,MatMenuModule,MatTableModule,MatSelectModule,FormsModule,MatSpinner],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  displayedColumns: string[] = ['name', 'description',"serieName","themeName","age","gender","boxHeight","boxWidth","boxDiameter","price","inStock","operation"];
  dataSource:any;
  series:any
  name!:string
  serieId!:number
  themes:any
  themeId!:number
  ageGroups:any
  ageGroupId!:number
  genders:any
  genderId!:number
  Id!:number
  total!: number;
  pageSize: number = 10;
  currentPage: number = 0;
  showSpinner = true;
  constructor(
    public commonService:CommonService,
    public alertifyService:AlertifyService,
    private dialog: MatDialog,
    private router: Router
  ){

  }

  ngOnInit(){
    this.getProducts(); 
    this.getAgeGroups();
    this.getGenders();
    this.getSeries();
    this.getThemes();  
    // this.alertifyService.message("Success", MessageTypes.Success) 
  }

  openProductDialog() {
    var dialogref = this.dialog.open(NewProductComponent, {
       width: '686px',
       height: '640px',
       position: {
         top: '10px',
       },
       autoFocus: true,
     });
     dialogref.afterClosed().subscribe((data) => {
       if (data) {
         this.getProducts();
       }
     });
   }

  getProducts(){
    this.showSpinner = true;
    let filterModel = new ProductFilter(
      this.name,
      this.serieId,
      this.themeId,
      this.genderId,
      this.ageGroupId,
      this.currentPage + 1,
      this.pageSize
    );
    this.commonService.getProducts().subscribe(res => {this.dataSource = res,this.showSpinner = false;
    }
    )
  }

  getSeries(){
    this.commonService.getSeries().subscribe(res=>this.series=res)
  }

  getThemes(){
    this.commonService.getThemes().subscribe(res=>this.themes=res);
  }

  getGenders(){
    this.commonService.getGenders().subscribe(res=>this.genders=res);
  }

  getAgeGroups(){
    this.commonService.getAgeGroups().subscribe(res=>this.ageGroups=res);
  }

  delete(id:number){
    this.commonService.deleteProduct(id).subscribe(res=>{
      window.location.reload();
    })
  }
}
