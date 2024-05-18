export class Product {
    id!: number;
    name!: string;
    description!: string;
    ageGroupId?: number;
    genderId?: number;
    boxHeight!: number;
    boxWidth!: number;
    boxDiameter!: number;
    themeId?: number;
    serieId?: number;
    inStock!: boolean;
    price!: number;
    reviewId?: number;
    createdDate?: Date;
    createdBy?: string;
    updatedDate?: Date;
    updatedBy?: string;
}
