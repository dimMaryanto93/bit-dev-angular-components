import { Component, NgModule } from '@angular/core';
import { AngularDatatablesModule } from './angular-datatables.module';

@Component({
  selector: 'angular-datatables-composition-cmp',
  template: `AngularDatatables composition: <angular-datatables></angular-datatables>`
})
class AngularDatatablesCompositionComponent {}

@NgModule({
  declarations: [AngularDatatablesCompositionComponent],
  imports: [AngularDatatablesModule],
  bootstrap: [AngularDatatablesCompositionComponent]
})
export class AngularDatatablesCompositionModule {}
