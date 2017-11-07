import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManagerSideComponent } from './manager-side.component';

import { ManagerDashboardComponent } from './manger-dashboard/manager-dashboard/manager-dashboard.component';
import { CategoryListComponent } from './category/category-list/category-list.component';

const routes: Routes = [
    { path: 'manager', component: ManagerSideComponent, children: [
      { path: '', redirectTo: '/manager/(m:dashboard)', pathMatch: 'full' },
      { path: 'dashboard', component: ManagerDashboardComponent, outlet: 'm' },
      { path: 'category_list', component: CategoryListComponent, outlet: 'm' }
    ]}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
  exports: [ RouterModule ]
})
export class Routing {}
