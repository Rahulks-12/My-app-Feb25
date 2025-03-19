import { Component } from '@angular/core';
import { FlipkartapiService } from '../flipkartapi.service';

@Component({
  selector: 'app-flipkartapi',
  templateUrl: './flipkartapi.component.html',
  styleUrls: ['./flipkartapi.component.css']
})
export class FlipkartapiComponent {
  products:any=[]
flipkartapi: any;
  constructor(private _FlipkartapiService:FlipkartapiService){
    _FlipkartapiService.getflipkartapi().subscribe(
      (data:any)=>{console.log(data); 
        this.flipkartapi=data;},(err:any)=>{
        alert("Internal Server Error");
    }
    )
  }

}
