import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { BlockUIModule } from 'ng-block-ui';
import { Uploader } from 'angular2-http-file-upload';

import { SharedModule } from '../../shared/shared.module';
import { Routing } from './manager-side.routing';

import { ManagerSideComponent } from './manager-side.component';
import { ManagerDashboardComponent } from './manger-dashboard/manager-dashboard/manager-dashboard.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { TableElementComponent } from './table-element/table-element.component';
import { CategoryManagerComponent } from './category/category-manager/category-manager.component';
import { ProductListComponent } from './product/product-list/product-list/product-list.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    BlockUIModule,
    SharedModule,
    Routing
  ],
  declarations: [
    ManagerSideComponent,
    ManagerDashboardComponent,
    CategoryListComponent,
    TableElementComponent,
    CategoryManagerComponent,
    ProductListComponent
  ],
  providers: [
    Uploader
  ],
  bootstrap: [
    ManagerSideComponent
  ]
})
export class ManagerSideModule { }
