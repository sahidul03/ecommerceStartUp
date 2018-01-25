import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';

import { CategoryService } from './services/category.service';
import { ItemService } from './services/item.service';

import { CategoryComponent } from './categories/category/category.component';
import { CategoryCreateComponent } from './categories/category-create/category-create.component';
import { ItemCreateComponent } from './Items/item-create/item-create.component';
import { ItemComponent } from './Items/Item/item.component';
import { OrderPlacementComponent } from './orders/placeOrders/order-placement.component';


const ROUTES = [
  { path: '', redirectTo: 'categories', pathMatch: 'full' },
  { path: 'categories', component: CategoryComponent },
  { path: 'category-create', component: CategoryCreateComponent },
  { path: 'items', component: ItemComponent },
  { path: 'item-create', component: ItemCreateComponent },
  { path: 'orders', component: OrderPlacementComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    CategoryCreateComponent,
    ItemCreateComponent,
    ItemComponent,
    OrderPlacementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    CategoryService,
    ItemService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }



