import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { Routing } from './manager-side.routing';
import { SharedModule } from '../../shared/shared.module';

import { ManagerSideComponent } from './manager-side.component';
import { ManagerDashboardComponent } from './manger-dashboard/manager-dashboard/manager-dashboard.component';
import { CategoryListComponent } from './category/category-list/category-list.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    SharedModule,
    Routing
  ],
  declarations: [
    ManagerSideComponent,
    ManagerDashboardComponent,
    CategoryListComponent
  ],
  bootstrap: [
    ManagerSideComponent
  ]
})
export class ManagerSideModule { }
