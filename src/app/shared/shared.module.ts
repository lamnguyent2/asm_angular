import { Input, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
    declarations: [
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        NgxPaginationModule,
        CommonModule
    ],
    exports:[
      BrowserModule,
      FormsModule,
      HttpClientModule,
      ReactiveFormsModule,
      NgxPaginationModule,
      CommonModule
    ]
})
export class SharedModule { }
