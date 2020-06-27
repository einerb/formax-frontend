import Swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormGroup, NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.scss'],
})
export class OrderEditComponent implements OnInit {
  public orders;
  public form: FormGroup;
  public submitted = false;

  constructor(
    private orderService: OrderService,
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.spinner.show();

    this.orders = {
      state: '',
      value: '',
    };

    let id = this.route.snapshot.paramMap.get('id');
    this.getId(id);
  }

  private getId(id: any) {
    this.orderService.getById(id).subscribe((res) => {
      this.orders = res.data[0];
      this.spinner.hide();
    });
  }

  public onUpdate(form: NgForm) {
    this.orderService
      .updateOrder(this.route.snapshot.paramMap.get('id'), form.value)
      .subscribe(
        () => {
          Swal.fire({
            icon: 'success',
            title: 'Enhorabuena',
            text: 'Registro exitoso!',
          }).then((result) => {
            if (result.value) {
              this.router.navigate([
                'order-details',
                this.route.snapshot.paramMap.get('id'),
              ]);
            }
          });
        },
        (err) => {
          this.onFailure(err);
        }
      );
  }

  private onSuccess() {
    Swal.fire({
      icon: 'success',
      title: 'Enhorabuena',
      text: 'Registro exitoso!',
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
