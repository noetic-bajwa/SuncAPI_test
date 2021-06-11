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

  getData(page:any,startDate:any,endDate:any){

    let url="https://gamenow.noeticworld.com/api/stats/?page="+page+"&fromDate="+startDate+"&toDate="+endDate;
    return this.http.get(url);
    }
    
    getDataRange(startDate:any,endDate:any){

      let url="https://gamenow.noeticworld.com/api/stats/?fromDate="+startDate+"&toDate="+endDate;
      return this.http.get(url);
      }
}