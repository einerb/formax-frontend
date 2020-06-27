import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: `home`,
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: `order`,
    loadChildren: () =>
      import('./pages/order/order.module').then((m) => m.OrderModule),
  },
  {
    path: `order-edit/:id`,
    loadChildren: () =>
      import('./pages/order-edit/order-edit.module').then((m) => m.OrderEditModule),
  },
  {
    path: `order-details/:id`,
    loadChildren: () =>
      import('./pages/order-detail/order-detail.module').then((m) => m.OrderDetailModule),
  },
  { path: ``, redirectTo: `home`, pathMatch: `full` },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
