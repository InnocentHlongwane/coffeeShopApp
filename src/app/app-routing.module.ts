import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'order', loadChildren: './order/order.module#OrderPageModule' },
  { path: 'new-order', loadChildren: './new-order/new-order.module#NewOrderPageModule' },
  { path: 'place-order/:name', loadChildren: './place-order/place-order.module#PlaceOrderPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
