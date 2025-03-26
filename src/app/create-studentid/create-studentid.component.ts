import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-studentid',
  templateUrl: './create-studentid.component.html',
  styleUrls: ['./create-studentid.component.css']
})
export class CreateStudentidComponent {
public studentform:FormGroup =new FormGroup({
  name:new FormControl(),
  dob:new FormControl(),
  school_name:new FormControl(),
  phone:new FormControl(),

})
  private _studentidService: any;
create(){
  this. _studentidService.createStudentid(this.studentform.value).subscribe(
    (data:any)=>{
      console.log(data);
      alert("new student added Successfully");
      
    },(err:any)=>{
      alert("iternal Server Err")

    }
  )
}
}
