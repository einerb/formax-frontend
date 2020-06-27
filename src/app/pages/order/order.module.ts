import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from 'ngx-spinner';

import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './order.component';

@NgModule({
  declarations: [OrderComponent],
  imports: [CommonModule, OrderRoutingModule, NgxSpinnerModule],
})
export class OrderModule {}
