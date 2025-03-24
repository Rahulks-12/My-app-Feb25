import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AccountsService } from '../accounts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-accounts',
  templateUrl: './create-accounts.component.html',
  styleUrls: ['./create-accounts.component.css']
})
export class CreateAccountsComponent {
public accountsForm:FormGroup = new FormGroup({
  account_number:new FormControl(),
  city:new FormControl(),
  ifsc_code:new FormControl(),
  id:new FormControl()
})
constructor(private _accountsService:AccountsService, private _router:Router ){}
create(){
  console.log(this.accountsForm.value);
  this._accountsService.createaccounts(this.accountsForm.value).subscribe(
    (data:any)=>{
      console.log(data);
      alert("new Vehicle Created Successfully!");
      this._router.navigateByUrl("/dashboard/vehicle");

    },(err:any)=>{
      alert("internal server err")
    }
  )


}




}
