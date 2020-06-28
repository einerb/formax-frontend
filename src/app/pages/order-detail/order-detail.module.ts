import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ReactiveFormsModule } from '@angular/forms';

import { OrderDetailRoutingModule } from './order-detail-routing.module';
import { OrderDetailComponent } from './order-detail.component';

@NgModule({
  declarations: [OrderDetailComponent],
  imports: [
    CommonModule,
    OrderDetailRoutingModule,
    NgxSpinnerModule,
    ReactiveFormsModule,
  ],
})
export class OrderDetailModule {}
