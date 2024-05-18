import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatError, MatFormFieldModule } from '@angular/material/form-field';
import { CommonService } from '../../../services/common.service';
import { MatSelectModule } from '@angular/material/select';
import { ProductDto } from '../../../models/products/product-dto';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { AlertifyService, MessageTypes } from '../../../services/alertify.service';

@Component({
  selector: 'app-new-product',
  standalone: true,
  imports: [MatFormFieldModule,ReactiveFormsModule,MatSelectModule,FormsModule,MatDialogModule,MatError   
  ],
  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.scss'
})
export class NewProductComponent implements OnInit {
  form!: FormGroup;
  series:any
  serieId!:any
  themes:any
  themeId!:any
  ageGroups:any
  ageGroupId!:any
  genders:any
  genderId!:any
  constructor(private fb: FormBuilder,public commonService:CommonService,
    private dRef: MatDialogRef<NewProductComponent>,private alertifyService:AlertifyService


  ){}
  ngOnInit(): void {
    this.form = this.fb.group({
      name: ["", [Validators.required]],
      description: ["", Validators.required],
      serieId: ["", Validators.required],
      themeId: ["", Validators.required],
      ageGroupId: ["", Validators.required],
      genderId: ["", Validators.required],
      boxHeight: ["", Validators.required],
      boxWidth: ["", Validators.required],
      boxDiameter: ["", Validators.required],
      price: ["", Validators.required],
      inStock: [""],
      imageName: ["", Validators.required],

    });
    this.getSeries();
    this.getAgeGroups();
    this.getThemes();
    this.getGenders()
    }
    save(){
      const dto = new ProductDto(
        this.form.get('name')!.value,
        this.form.get('description')!.value,
        this.form.get('serieId')!.value,
        this.form.get('themeId')!.value,
        this.form.get('genderId')!.value,
        this.form.get('ageGroupId')!.value,
        this.form.get('boxHeight')!.value,
        this.form.get('boxWidth')!.value,
        this.form.get('boxDiameter')!.value,
        this.form.get('price')!.value,
        true,
        this.form.get('imageName')!.value,
      );
    
      this.commonService.addProduct(dto).subscribe({
        next: (res) => {
          console.log('Response:', res); // Log the response
              this.alertifyService.message("Successfully added",MessageTypes.Success)
          this.dRef.close(true);
        },
        error: (error) => {
          console.error('Error:', error); // Log the error
              this.alertifyService.message("Error happened",MessageTypes.Error)

        },
      });
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
}
