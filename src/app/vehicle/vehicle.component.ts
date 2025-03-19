import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent {
  vehicle:any=[];
constructor(private_vehicleService:VehicleService){
  private_vehicleService.getVehicles().subscribe(
    (data:any)=>{console.log(data); this.vehicle=data;},(err:any)=>{
      alert("Internal Server Error");
    }
  )
}
}
