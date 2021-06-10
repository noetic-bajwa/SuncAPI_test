import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  currentPage:any;
  page:any=1;
  data:any={};
  
  
  
  constructor(private dataService:DataService) { }
  

  ngOnInit(): void {
    console.log('ngOninit Called')
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

  

}
