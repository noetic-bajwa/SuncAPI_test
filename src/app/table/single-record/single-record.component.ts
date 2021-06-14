import { Component, DoCheck, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import {Router} from '@angular/router';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-single-record',
  templateUrl: './single-record.component.html',
  styleUrls: ['./single-record.component.css']
})
export class SingleRecordComponent implements OnInit , DoCheck {
  
  constructor(private dataService:DataService,private router: Router,private toastr: ToastrService) {
    this.dataService.recordID.subscribe( rID =>{
      if(rID == null){
        this.router.navigateByUrl('OperatorStats')
      }
      this.recordID = rID;
      // alert(rID);
    })
   }

  data:any={};
  previousDayData:any={};
  totalBase_n:number;
  //unique_players * game_play_rate

  recordID:any;
  ngOnInit(): void {
    this.dataService.getSingleRecord(this.recordID).subscribe(data=>{
      this.data=data;
      console.log(this.data);
      
      
     },
     err=>{
      
     })
    
  }

  onSubmit(form:NgForm){
    console.log(form.value)
    this.dataService.updateRecord(form.value,this.data.id).subscribe(data=>{
      this.toastr.success('Record Successfully Updated',);
      this.router.navigate(['OperatorStats'])
      
      
     },
     err=>{
      
     })







  };
  
  onClickReset(){
    this.dataService.getSingleRecord(this.recordID).subscribe(data=>{
      this.data=data; 
      console.log(this.data);
      
      
     },
     err=>{
      
     })
  }

  ngDoCheck() {
    // this.total_game_played = this.unique_players * this.game_play_rate; 
  }

  calculateTotalGamePlayed(num1:any,num2:any){
    return (parseInt(num1) * parseInt(num2))
  }

  calculateTotalEngageBase(num:any){
    // this.dataService.getSingleRecord(this.recordID-1).subscribe(data=>{
    //   this.previousDayData=data;
    //   let totalBasePrv = this.previousDayData.totalEngageBase;
    //   return ( (parseInt(num) / 100) * parseInt(totalBasePrv) )
      
      
    //  },
    //  err=>{
      
    //  })
     
    
  }

  

  }


