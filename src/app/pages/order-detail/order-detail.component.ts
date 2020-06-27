import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { OrderService } from 'src/app/services/order.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css'],
})
export class OrderDetailComponent implements OnInit {
  public form: FormGroup;
  public orders;
  public id;
  public visible = false;
  public showForm = false;
  public submitted = false;

  constructor(
    private orderService: OrderService,
    private productService: ProductService,
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService,
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  ngOnInit(): void {
    this.spinner.show();

    this.id = this.route.snapshot.paramMap.get('id');
    this.getId(this.id);
  }

  get f() {
    return this.form.controls;
  }

  private createForm() {
    this.form = this.fb.group({
      id: [''],
      sku: ['', [Validators.required, Validators.minLength(10)]],
      name: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
      price: ['', [Validators.required]],
      bar_code: ['', [Validators.required]],
    });
  }

  private getId(id: any) {
    this.orderService.getById(id).subscribe((res) => {
      this.orders = res.data[0];
      this.spinner.hide();

      if (this.orders?.length > 0) {
        this.visible = false;
      } else {
        this.visible = true;
      }
    });
  }

  public deleteProduct(id: any) {
    Swal.fire({
      title: 'Está seguro?',
      text: 'Sí elimina el producto no se podrá recuperar!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, deseo eliminar!',
    }).then((result) => {
      if (result.value) {
        this.productService.deleteProduct(id).subscribe(() => {
          Swal.fire(
            'Eliminado!',
            'El producto fue eliminado exitosamente.',
            'success'
          );
        });
        this.getId(this.route.snapshot.paramMap.get('id'));
      }
    });
  }

  public onSave() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    const data = {
      sku: this.form.get('sku').value,
      name: this.form.get('name').value,
      quantity: this.form.get('quantity').value,
      price: this.form.get('price').value,
      bar_code: this.form.get('bar_code').value,
      order_id: this.route.snapshot.paramMap.get('id'),
    };

    this.productService.createProduct(data).subscribe(
      () => {
        this.onSuccess();
        this.getId(this.route.snapshot.paramMap.get('id'));
        this.form.reset();
        this.showForm = false;
      },
      (err) => {
        this.onFailure(err);
      }
    );
  }

  public show() {
    this.showForm = !this.showForm;
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
