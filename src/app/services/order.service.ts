import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { GlobalService } from './global.service';
import { Constant } from '../shared/constants';
import { API_KEY } from '../shared/endpoints';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private globalService: GlobalService) {}

  public getAll(): Observable<any> {
    return this.globalService.get(Constant.Endpoints.ORDER.BASE).pipe(
      map((res) => {
        return res;
      })
    );
  }

  public getById(id: any) {
    return this.globalService
      .get(Constant.Endpoints.ORDER.DETAILS + '/' + id + API_KEY)
      .pipe(
        map((res) => {
          return res;
        })
      );
  }

  public getProductsByOrder(id: any) {
    return this.globalService
      .get(Constant.Endpoints.ORDER.PRODUCTSBYORDER + '/' + id + API_KEY)
      .pipe(
        map((res) => {
          return res;
        })
      );
  }

  public createOrder(data: any) {
    return this.globalService.post(Constant.Endpoints.ORDER.BASE, data).pipe(
      map((res) => {
        return res;
      })
    );
  }

  public updateOrder(id: any, data: any) {
    return this.globalService
      .put(Constant.Endpoints.ORDER.UPDATE + '/' + id + API_KEY, data)
      .pipe(
        map((res) => {
          return res;
        })
      );
  }

  public deleteOrder(id: any) {
    return this.globalService
      .delete(Constant.Endpoints.ORDER.DELETE + '/' + id + API_KEY)
      .pipe(
        map((res) => {
          return res;
        })
      );
  }
}
