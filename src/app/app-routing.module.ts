import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UiComponent } from './ui/ui.component';
import { AdminComponent } from './admin/admin.component';
import { MainComponent } from './ui/main/main.component';
import { CatalogComponent } from './ui/catalog/catalog.component';
import { title } from 'process';
import { LoginComponent } from './ui/login/login.component';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';
import { ProductsComponent } from './admin/components/products/products.component';
import { AllProductsComponent } from './ui/catalog/components/all-products/all-products.component';
import { ThemesComponent } from './admin/components/themes/themes.component';
import { SeriesComponent } from './admin/components/series/series.component';
import { OrdersComponent } from './admin/components/orders/orders.component';
import { UsersComponent } from './admin/components/users/users.component';
import { NewComponent } from './ui/catalog/components/new/new.component';
import { ExclusiveComponent } from './ui/catalog/components/exclusive/exclusive.component';
import { BestsellerComponent } from './ui/catalog/components/bestseller/bestseller.component';
import { SaleComponent } from './ui/catalog/components/sale/sale.component';
import { ProductComponent } from './ui/catalog/components/product/product.component';

export const routes: Routes = [
    {
        path:"",
        component:UiComponent,
        children:[
            {        
                path:"",
                redirectTo: "main",
                pathMatch: "full"
            },
            {        
                path:"main",
                component:MainComponent
              },
              {        
                path:"product",
                component:ProductComponent
              },
                {        
                path:"catalog",
                component:CatalogComponent,
                children:[
                  {
                    path:"",
                    redirectTo:"all-products",
                    pathMatch:"full"
                  },
                  {
                    path:"all-products",
                    component:AllProductsComponent
                  },
                  {
                    path:"new",
                    component:NewComponent
                  },
                  {
                    path:"exclusive",
                    component:ExclusiveComponent
                  },
                  {
                    path:"bestseller",
                    component:BestsellerComponent
                  },
                  {
                    path:"sale",
                    component:SaleComponent
                  },
                ]
                }
        ]
    },
       {
        path:"admin",
        component:AdminComponent,
        children:[
          {
            path: "", // Empty path
            redirectTo: "products", // Redirect to the dashboard path
            pathMatch: "full" // Ensure full path match
          },
          {
            path: "dashboard",
            component: DashboardComponent
          },
          {
            path:"products",
            component: ProductsComponent,
            data: {
              title: 'Products',
              breadcrumb: [
                {
                  label: 'Products',
                  url: '/Products',
                },
              ],
            },
          },
          {
            path:"themes",
            component: ThemesComponent,
            data: {
              title: 'Themes',
              breadcrumb: [
                {
                  label: 'Themes',
                  url: '/Themes',
                },
              ],
            },
          },
          {
            path:"series",
            component: SeriesComponent,
            data: {
              title: 'Series',
              breadcrumb: [
                {
                  label: 'Series',
                  url: '/Series',
                },
              ],
            },
          },
          {
            path:"orders",
            component: OrdersComponent
          },
          {
            path:"users",
            component: UsersComponent
          }
        ]
    },
    {        
      path:"login",
      component:LoginComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }