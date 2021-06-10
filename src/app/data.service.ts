import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
  withCredentials: true,
  headers: new HttpHeaders({
    'Content-Type':  'application/json'  })
};
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getData(){
    let url="https://gamenow.noeticworld.com/api/stats/";
    return this.http.get(url);
    }


}