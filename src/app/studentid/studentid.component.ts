import { Component } from '@angular/core';
import { StudentidService } from '../studentid.service';

@Component({
  selector: 'app-studentid',
  templateUrl: './studentid.component.html',
  styleUrls: ['./studentid.component.css'],
})
export class StudentidComponent {
  term:string='';
  studentid: any;
  constructor(private _studentidService: StudentidService) {
    _studentidService.getstudentid().subscribe(
      (data: any) => {
        console.log(data);
        this.studentid = data;
      },
      (err: any) => {
        alert('Internal Server Error');
      }
    );
  }
  delete(id:any){
if(confirm("Are you sure u]you want to delete")==true)
{
  this._studentidService.deleteStudentid(id).subscribe(
    (data:any)=>{
      alert("record delete successfully!")
    }
  )
}else(
  alert("you have cancelled!")
)
  }

  filter(){
    this._studentidService.getfilteredstudentid(this.term).subscribe(
      (data:any)=>{
        console.log(data);
        this.studentid=data;
      },(err:any)=>{
        alert("Internal server Error")
      }
    )
  }
  }
