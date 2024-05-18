import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarRatingModule } from 'angular-star-rating';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StarRatingModule.forRoot()
  ],
  exports: [
    MyStarRatingModule
  ]
})
export class MyStarRatingModule { }
