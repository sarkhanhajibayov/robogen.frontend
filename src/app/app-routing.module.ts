import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CabinetComponent } from './cabinet/cabinet/cabinet.component';
import { MainComponent } from './home/main/main.component';
import { CatalogComponent } from './home/catalog/catalog.component';

export const routes: Routes = [
    {
        path:"",
        component:HomeComponent,
        children:[
            {        
                path:"",
                redirectTo: "main",
                pathMatch: "full"
                },
            {        
                path:"main",
                component:MainComponent},
                {        
                path:"catalog",
                component:CatalogComponent,
                data: {
                    breadcrumb: [
                      {
                        label: 'Catalog',
                        url: '',
                      },
                    ],
                  },
                }
        ]
    }
    ,    {
        path:"cabinet",
        component:CabinetComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }