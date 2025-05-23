import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlipkartapiService {

  constructor(private _httpClient:HttpClient) { }
  getflipkartapi():Observable<any>{
    return this._httpClient.get("https://fakestoreapi.com/products")
  }
}
