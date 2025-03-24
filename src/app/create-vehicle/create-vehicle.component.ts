import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehicleService } from '../vehicle.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css']
})
export class CreateVehicleComponent {
  public vehicleForm:FormGroup =new FormGroup({
    Vehicle:new FormControl(),
    color:new FormControl(),
    Cost:new FormControl(),
    Fuel:new FormControl(),
    Manufacturer:new FormControl(),
    Type:new FormControl(),

  })
constructor(private _vehicleService:VehicleService, private _router:Router){}
create(){
  console.log(this.vehicleForm.value);
  this._vehicleService.createVehicle(this.vehicleForm.value).subscribe(
    (data:any)=>{
      console.log(data);
      alert("new Vehicle Created Successfully!");
      this._router.navigateByUrl("/dashboard/vehicle");
    },(err:any)=>{
      alert("Iternal Server Errr")
    }
  )
}
}
