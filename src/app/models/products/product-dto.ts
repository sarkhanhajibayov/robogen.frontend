export class ProductDto {
    constructor(
      name: string,
      description: string,
      serieId: number,
      themeId: number,
      genderId: number,
      ageGroupId: number,
      boxHeight : number,
      boxWidth : number,
      boxDiameter : number,
      price : number,
      inStock : boolean,
      imageName: string,

    ) {
      this.name = name;
      this.description = description;
      this.serieId = serieId;
      this.themeId = themeId;
      this.genderId = genderId;
      this.ageGroupId = ageGroupId;
      this.boxHeight = boxHeight;
      this.boxWidth = boxWidth;
      this.boxDiameter = boxDiameter;
      this.price = price;
      this.inStock = inStock;
      this.imageName =imageName;


    }
    name: string;
    description: string;
    serieId: number;
    themeId: number;
    genderId: number;
    ageGroupId: number;
    boxHeight:number;
    boxWidth:number;
    boxDiameter:number;
    price:number;
    inStock:boolean;
    imageName:string
  }
  
