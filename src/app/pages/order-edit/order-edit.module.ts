import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderEditRoutingModule } from './order-edit-routing.module';
import { OrderEditComponent } from './order-edit.component';


@NgModule({
  declarations: [OrderEditComponent],
  imports: [
    CommonModule,
    OrderEditRoutingModule
  ]
})
export class OrderEditModule { }
