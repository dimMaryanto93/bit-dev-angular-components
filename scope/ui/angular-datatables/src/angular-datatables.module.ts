import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from "@angular/platform-browser";
import { AngularDatatablesComponent } from './angular-datatables.component';
import { DataTablesModule } from "angular-datatables";

@NgModule({
  declarations: [
    AngularDatatablesComponent
  ],
  imports: [
    BrowserModule, DataTablesModule, CommonModule,
  ],
  exports: [
    AngularDatatablesComponent
  ]
})
export class AngularDatatablesModule {}
