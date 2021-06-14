import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';


const httpOptions = {
  withCredentials: false,
  headers: new HttpHeaders({
    'Content-Type':  'application/json' ,
    
  })
};
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  recordID = new BehaviorSubject(null); ;
  
  getData(page:any,startDate:any,endDate:any){

    let url="https://gamenow.noeticworld.com/api/stats/?page="+page+"&fromDate="+startDate+"&toDate="+endDate;
    return this.http.get(url);
    }
    getSingleRecord(recordID:any){

      let url="https://gamenow.noeticworld.com/api/stats/"+recordID;
      return this.http.get(url);
      }
    

      updateRecord(info:any,recordID:any){
        let body=JSON.stringify(info);
        let url="https://gamenow.noeticworld.com/api/stats/"+recordID;
        return this.http.put(url,body,httpOptions);
      }
}