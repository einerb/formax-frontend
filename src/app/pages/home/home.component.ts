import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public orders = [];
  public visible = false;

  constructor(
    private orderService: OrderService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.spinner.show();
    this.allOrders();
  }

  private allOrders() {
    this.orderService.getAll().subscribe((res) => {
      this.orders = res.data;
      this.spinner.hide();

      if (this.orders.length > 0) {
        this.visible = false;
      } else {
        this.visible = true;
      }
    });
  }
}
