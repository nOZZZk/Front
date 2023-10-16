import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class MenuiserieService {

  constructor(private http: HttpClient) { }

  getMenuiserie(): Observable<Object>{
    return this.http.get('http://localhost:8081/api');
  }
}
