import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehicleService } from '../vehicle.service';
import { ActivatedRoute, Router } from '@angular/router';

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
  id:number=0;
constructor(private _vehicleService:VehicleService, private _router:Router,private _activatedRoute:ActivatedRoute){
  _activatedRoute.params.subscribe(
    (data:any)=>{
      console.log(data.id);
      this.id=data.id;

    },(err:any)=>{
      alert("Internal Server Error")
    }
  )
  if(this.id){
_vehicleService.getVehicle(this.id).subscribe(
  (data:any)=>{
    console.log(data);
    this.vehicleForm.patchValue(data);

  },(err:any)=>{
    alert("Internal Server Error")
  }
)
  }

}
create(){
  if(this.id){
    console.log(this.vehicleForm.value);
  this._vehicleService.updateVehicle(this.id,this.vehicleForm.value).subscribe(
    (data:any)=>{
      console.log(data);
      alert("Vehicle record updated Successfully!");
      this._router.navigateByUrl("/dashboard/vehicle");
    },(err:any)=>{
      alert("Iternal Server Errr")
    }
  )
}else{
  console.log(this.vehicleForm.value);
  this. _vehicleService.createVehicle(this.vehicleForm.value).subscribe(
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
}
