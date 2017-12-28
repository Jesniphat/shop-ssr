import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from './shared/shared.module';
import { Routing } from './app.routing';

import { ManagerLoginModule } from './components/manager-login/manager-login.module';
import { ManagerSideModule } from './components/manager-side/manager-side.module';

import { AppComponent } from './app.component';
import { AlertsComponent } from './components/alerts/alerts.component';

import './rxjs-operators';

@NgModule({
  declarations: [
    AppComponent,
    AlertsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'shop'}),
    FormsModule,
    HttpModule,
    HttpClientModule,
    Routing,
    SharedModule,
    ManagerLoginModule,
    ManagerSideModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
