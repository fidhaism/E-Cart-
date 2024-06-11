import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  serverUrl = `http://localhost:3000`

  constructor(private http:HttpClient) { }

  getAllProductAPI(){
    return this.http.get(`${this.serverUrl}/allProducts`)
  }


}