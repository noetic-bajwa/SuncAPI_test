import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  currentPage:any;
  page:any=1;
  data:any={};
  startDate:any;
  EndDate:any;
  
  
  
  constructor(private dataService:DataService, private datePipe: DatePipe) { }
  

  ngOnInit(): void {
    this.dataService.getData(this.page-1).subscribe(data=>{
       this.data=data;
       this.currentPage = this.data['currentPage'];
      //  this.page = this.data['totalPages']
       console.log(this.data)
       
       
      },
      err=>{
       
      })
         
  }

  pageChanged(event: PageChangedEvent): void {
    this.page = event.page;
    this.dataService.getData(this.page-1).subscribe(data=>{
      this.data=data;
     },
     err=>{
      
     })
  }

  onClickSearch(startDate:any,endDate:any){
    startDate=this.datePipe.transform(startDate,'yyyyMMdd');
    endDate=this.datePipe.transform(endDate,'yyyyMMdd');
    this.dataService.getDataRange(startDate,endDate).subscribe(data=>{
      this.data=data;
      
     },
     err=>{
      
     })
    
  }

  onClickReset(){
    this.dataService.getData('0').subscribe(data=>{
      this.data=data;
      this.currentPage = this.data['currentPage'];
     //  this.page = this.data['totalPages']
      console.log(this.data)
      
      
     },
     err=>{
      
     })
    
  }




  

}
