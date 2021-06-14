import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleRecordComponent } from './table/single-record/single-record.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  {
    path:'',redirectTo:'OperatorStats',pathMatch:'full'
  },
  {
    path:'OperatorStats',component:TableComponent
    
  },
  {
    path:'Single',component:SingleRecordComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
