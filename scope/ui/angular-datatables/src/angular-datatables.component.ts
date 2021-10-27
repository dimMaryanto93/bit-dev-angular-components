import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {DataTableDirective} from 'angular-datatables';
import {Subject} from 'rxjs';

import * as $ from 'jquery';
import 'datatables.net/js/jquery.dataTables';
import 'datatables.net-bs4/js/dataTables.bootstrap4';
import 'datatables.net-buttons/js/dataTables.buttons';
import 'datatables.net-buttons/js/buttons.colVis';
import 'datatables.net-buttons/js/buttons.flash';
import 'datatables.net-buttons/js/buttons.html5';
import 'datatables.net-buttons/js/buttons.print';
import 'datatables.net-buttons-bs4/js/buttons.bootstrap4';
import 'datatables.net-colreorder/js/dataTables.colReorder';
import 'datatables.net-colreorder-bs4/js/colReorder.bootstrap4';
import 'datatables.net-select/js/dataTables.select';
import 'datatables.net-select-bs4/js/select.bootstrap4';
import 'jszip/dist/jszip';


@Component({
  selector: 'angular-datatables',
  templateUrl: './angular-datatables.component.html',
  styleUrls: ['./angular-datatables.component.scss']
})
export class AngularDatatablesComponent implements OnInit, AfterViewInit, OnDestroy {
  
  // @ViewChild(DataTableDirective, {static: false})
  // private datatableElement: DataTableDirective;

  dtTrigger: Subject<any> = new Subject<any>();

  // dtOptions: DataTables.Settings = {};

  constructor() {
    $(document).ready(function(){
      console.log('jquery works!');
    });
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  ngAfterViewInit(): void {
    this.dtTrigger.next();
  }
  
  ngOnInit(): void {
  }

}
