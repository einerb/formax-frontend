import Swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  public form: FormGroup;
  public orders;
  public submitted = false;

  constructor(
    private orderService: OrderService,
    private spinner: NgxSpinnerService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.createForm();
  }

  ngOnInit(): void {
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }

  get f() {
    return this.form.controls;
  }

  private createForm() {
    this.form = this.fb.group({
      channel: ['', [Validators.required]],
      state: ['', [Validators.required]],
      value: ['', [Validators.required]],
      discount: ['', [Validators.required]],
      delivery: ['', [Validators.required]],
      dispatch: ['', [Validators.required]],
    });
  }

  public onSave() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    this.orderService.createOrder(this.form.value).subscribe(
      () => {
        this.onSuccess();
        this.router.navigate(['home']);
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
      text: err.code.error?.errors,
    });
  }
}
