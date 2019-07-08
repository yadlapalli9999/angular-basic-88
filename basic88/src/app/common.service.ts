import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private _http:HttpClient) { }
 
  getHeader(){
    return this._http.get('http://localhost:3000/basic88Header')
  }

  getMainImageList(){
    return this._http.get('http://localhost:3000/main-imgList')
  }
}
