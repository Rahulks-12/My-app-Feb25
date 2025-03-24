import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor(private _httpClient:HttpClient) { }
  getaccounts():Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals")
  }
  getfilteredaccounts(term:any):Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?filter="+term);
      }
      getsortedaccounts(column:any,order:any):Observable<any>{
        return this._httpClient .get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?sortBy="+column+"&order="+order)
      }
      createaccounts(data:any):Observable<any>{
        return this._httpClient.post("https://6128991386a213001729f9df.mockapi.io/test/v1/principals",data)
      }
}
