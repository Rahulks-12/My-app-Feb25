import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentidService {

  constructor(private _httpClient:HttpClient) { }
  getstudentid():Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student")
  }
  deleteStudentid(id:any):Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student"+id)
  }
  getfilteredstudentid(term:any):Observable<any>{
return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?filter="+term);
  }
}
