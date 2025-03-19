import { Component } from '@angular/core';

@Component({
  selector: 'app-flipkart',
  templateUrl: './flipkart.component.html',
  styleUrls: ['./flipkart.component.css']
})
export class FlipkartComponent {
Products:any=[
  {ProductName:'pen',Price:'10',Rating:'3', FreeDelivery:'true'},
  {ProductName:'phone', Price:'100',Rating:'2', FreeDelivery:'false'},
  {ProductName:'shirt', Price:'400',Rating:'4', FreeDelivery:'true'},
  {ProductName:'cap', Price:'200',Rating:'5',  FreeDelivery:'false'},
  {ProductName:'mobile case',Price:'300',Rating:'2', FreeDelivery:'true'},
  {ProductName:'remote',Price:'400',Rating:'2.5', FreeDelivery:'false'}
];
delete(i:number){
  this.Products.splice(i,1);
}
ProductName:string='';
Price:number=0;
Rating:number=0;
FreeDelivery:boolean=true;
create(){
  let product={
    ProductName:this.ProductName,
    Price:this.Price,
    Rating:this.Rating,
    

  };
  this.Products.unshift(product);
}
term:string='';
search(){
  this.Products=this.Products.filter((Products:any)=>Products.ProductName.includes(this.term));
}
sort(){
  this.Products.sort((a:any,b:any)=>a.Price-b.Price);
}
sort1(){
  this.Products.sort((a:any,b:any)=>b.Price - a.Price);
}
sort2(){
  this.Products.sort((a:any,b:any)=>b.Rating-a.Rating);
}
sort3(){
  this.Products.sort((a:any,b:any)=>a.Rating-b.Rating);
}
map(){
  this.Products=this.Products.map((Product:any)=>{
    Product.Price=Product.Price/2 ;
    return Product;
  })
}

}
