import { Component, OnInit , HostListener , ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import {Router} from '@angular/router';
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
    
  
  
  
  
  constructor(private dataService:DataService, private datePipe: DatePipe,private router: Router) {
    
   }
   

  ngOnInit(): void {
    this.dataService.getData(0,'','').subscribe(data=>{
       this.data=data;
      //  this.currentPage = this.data['currentPage'];
      //  this.page = this.data['totalPages']
       console.log(this.data)
       
       
      },
      err=>{
       
      })
         
  }

  pageChanged(event: PageChangedEvent,startDate:any,endDate:any): void {
    console.log(startDate);
    console.log(endDate);
    this.page = event.page;
    
      startDate=this.datePipe.transform(startDate,'yyyyMMdd');
      endDate=this.datePipe.transform(endDate,'yyyyMMdd');
    if(startDate == null){
      startDate = ''
    }
    if(endDate == null){
      endDate = ''
    }
    console.log(startDate);
    console.log(endDate);
    
    this.dataService.getData(this.page-1,startDate,endDate).subscribe(data=>{
      
      this.data=data;
      console.log(this.data)
     },
     err=>{
      
     })
  }

  onClickSearch(startDate:any,endDate:any){
    this.currentPage = 0;
    startDate=this.datePipe.transform(startDate,'yyyyMMdd');
    console.log(startDate);
    endDate=this.datePipe.transform(endDate,'yyyyMMdd');
    console.log(endDate);
    this.dataService.getData(0,startDate,endDate).subscribe(data=>{
      this.data=data;
      console.log(this.data)
     },
     err=>{
      
     })
    
  }

  onClickReset(StartDate:any,EndDate:any){
    this.StartingDate='';
    this.EndingDate='';
    this.dataService.getData(0,this.StartingDate,this.EndingDate).subscribe(data=>{
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
    let Formated_StartingDate = this.datePipe.transform(this.sDate,'yyyyMMdd');
    this.EndingDate=this.datePipe.transform(this.eDate,'MM/dd/yyyy');
    let Formated_EndingDate = this.datePipe.transform(this.eDate, 'yyyyMMdd')
    this.dataService.getData(0,Formated_StartingDate ,Formated_EndingDate).subscribe(data=>{
      this.data=data;
      this.currentPage = this.data['currentPage'];
      console.log(this.data)
      
      
     },
     err=>{
      
     })
    
  }

  onClickEdit(rID:any){
    // alert(rID);
    this.dataService.recordID.next(rID);
    this.router.navigateByUrl('Single')


  }

  compare(num1:any,num2:any){
    return (parseInt(num1) > parseInt(num2))
  }

  

}
