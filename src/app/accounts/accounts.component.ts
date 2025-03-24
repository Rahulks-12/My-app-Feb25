import { Component } from '@angular/core';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent {
  term :string='';  
  accounts:any=[]
  constructor(private _accountsService:AccountsService){
    _accountsService.getaccounts().subscribe(
      (data:any)=>{
        console.log(data); this.accounts=data;}
      ,(err:any)=>{
        alert("Internal Server Error");
      }
    )
  }
 
filter(){
  this._accountsService.getfilteredaccounts(this.term).subscribe(
    (data:any)=>{
      console.log(data);
      this.accounts=data;
    },(err:any)=>{
     alert("Internal server Error") 
    }
  )}
  column:string='';
  order:string='';
  sort(){
    this._accountsService.getsortedaccounts(this.column,this.order).subscribe(
      (data:any)=>{
        console.log(data);
        this.accounts=data;
      },(err:any)=>{
        alert("Internal Server Error!")
      }
    )
  }
}
