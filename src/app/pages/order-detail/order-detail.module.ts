import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { OrderDetailRoutingModule } from './order-detail-routing.module';
import { OrderDetailComponent } from './order-detail.component';

@NgModule({
  declarations: [OrderDetailComponent],
  imports: [
    CommonModule,
    OrderDetailRoutingModule,
    NgxSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class OrderDetailModule {}
