import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  data:any={};
  
  
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  
    this.dataService.getData().subscribe(data=>{
       this.data=data;
       console.log(data);
       
      },
      err=>{
       
      })
      
      
       
       
  }
  

}
