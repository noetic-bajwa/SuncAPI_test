import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  data:any={};
  returnedArray: any=[];
  
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  
    this.dataService.getData().subscribe(data=>{
       this.data=data;
       this.returnedArray = this.data.slice(0, 10);
       
      },
      err=>{
       
      })
      
      
       
       
  }
  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedArray = this.data.slice(startItem, endItem);
  }

}
