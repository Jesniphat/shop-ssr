import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { Routing } from './manager-side.routing';
import { SharedModule } from '../../shared/shared.module';

import { ManagerSideComponent } from './manager-side.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    SharedModule,
    Routing
  ],
  declarations: [
    ManagerSideComponent
  ],
  bootstrap: [
    ManagerSideComponent
  ]
})
export class ManagerSideModule { }
