import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { TableComponent } from './table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { DatePipe } from '@angular/common';
import { SingleRecordComponent } from './table/single-record/single-record.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    SingleRecordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    PaginationModule.forRoot(),
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    ToastrModule.forRoot()

  ],
  providers: [DataService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
