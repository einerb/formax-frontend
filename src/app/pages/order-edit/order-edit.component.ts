import Swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.scss'],
})
export class OrderEditComponent implements OnInit {
  public orders;

  constructor(
    private orderService: OrderService,
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.spinner.show();

    let id = this.route.snapshot.paramMap.get('id');
    this.getId(id);
  }

  private getId(id: any) {
    this.orderService.getById(id).subscribe((res) => {
      this.orders = res.data[0];
      this.spinner.hide();
    });
  }

  private onSuccess() {
    Swal.fire({
      icon: 'success',
      title: "Enhorabuena",
      text: "Registro exitoso!"
    });
  }

  private onFailure(err) {
    Swal.fire({
      icon: 'error',
      title: err.code,
      text: err.message,
    });
  }
}
