import { Component, OnInit , HostListener , ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { DatePipe } from '@angular/common';
import { BsDatepickerDirective } from 'ngx-bootstrap/datepicker';

interface IRange {
  value: Date[];
  label: string;
}
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @ViewChild(BsDatepickerDirective, { static: false }) datepicker: BsDatepickerDirective;
  
   @HostListener('window:scroll')
   onScrollEvent() {
     this.datepicker.hide();
     
     
   }

  currentPage:any;
  page:any=1;
  data:any={};
  StartingDate:any;
  EndingDate:any;
  maxDate=new Date();
  sDate=new Date(new Date().setDate(new Date().getDate() - 7));
  eDate=new Date();
    
  
  
  
  
  constructor(private dataService:DataService, private datePipe: DatePipe) {
    
   }
   

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

  onClickReset(StartDate:any,EndDate:any){
    this.StartingDate='';
    this.EndingDate='';
    this.dataService.getData('0').subscribe(data=>{
      this.data=data;
      this.currentPage = this.data['currentPage'];
     //  this.page = this.data['totalPages']
      console.log(this.data)
      
      
     },
     err=>{
      
     })
    
  }

  onClickLast7Days(){
    this.StartingDate=this.datePipe.transform(this.sDate,'MM/dd/yyyy');
    this.EndingDate=this.datePipe.transform(this.eDate,'MM/dd/yyyy');
  }




  

}
