import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { NgxDatatableModule } from '@swimlane/ngx-datatable/src';
import { Uploader } from 'angular2-http-file-upload';

import { SharedModule } from '../../shared/shared.module';
import { Routing } from './manager-side.routing';

import { ManagerSideComponent } from './manager-side.component';
import { ManagerDashboardComponent } from './manger-dashboard/manager-dashboard/manager-dashboard.component';
import { CategoryListComponent } from './category/category-list/category-list.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    NgxDatatableModule,
    SharedModule,
    Routing
  ],
  declarations: [
    ManagerSideComponent,
    ManagerDashboardComponent,
    CategoryListComponent
  ],
  providers: [
    Uploader
  ],
  bootstrap: [
    ManagerSideComponent
  ]
})
export class ManagerSideModule { }
