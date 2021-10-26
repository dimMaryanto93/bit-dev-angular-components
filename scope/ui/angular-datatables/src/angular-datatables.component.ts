import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {DataTableDirective} from 'angular-datatables';
import {Subject} from 'rxjs';
import $ from 'jquery';

@Component({
  selector: 'angular-datatables',
  template: `
  <table datatable class="row-border hover table table-striped">
  <thead>
    <tr>
      <th>ID</th>
      <th>First name</th>
      <th>Last name</th>
    </tr>
  </thead>
  <tbody>    
    <tr>
      <td>11</td>
      <td>Louis</td>
      <td>Lin</td>
    </tr>
    <tr>
      <td>12</td>
      <td>Zelda</td>
      <td>Link</td>
    </tr>
  </tbody>
</table>
`,
  styleUrls: ['./angular-datatables.component.scss']
})
export class AngularDatatablesComponent implements OnInit, AfterViewInit {
  
  constructor() {}

  ngAfterViewInit(): void {
    this.dtTrigger.next();
  }
  
  ngOnInit(): void {
  }

  dtTrigger: Subject<any> = new Subject();

}
