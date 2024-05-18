export class ProductFilter {
    constructor(name:string,serieId:number,themeId:number,genderId:number,ageGroupId:number,page:number,pageSize:number) {
        this.name=name;
        this.serieId=serieId;
        this.themeId=themeId;
        this.genderId=genderId;
        this.ageGroupId=ageGroupId;
        this.page=page;
        this.pageSize=pageSize;
    }
    name: string ;   
    serieId: number;
    themeId: number;
    genderId: number;
    ageGroupId: number;
    page: number;
    pageSize: number;
}