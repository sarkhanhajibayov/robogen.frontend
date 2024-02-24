import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CabinetComponent } from './cabinet/cabinet/cabinet.component';

export const routes: Routes = [
    {
        path:"",
        pathMatch: "full",
        component:HomeComponent
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