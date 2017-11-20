import { Component } from '@angular/core';
import { AlertsComponent } from './components/alerts/alerts.component';
import { AlertsService } from './service/alerts.service';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /**
   * Socket cliend
   */
  public socket = io('http://localhost:8880');

  public loginData: any;

  title = 'app';

  constructor(public alerts: AlertsService) { }

  public ngOnInit() {
    this.loginData = JSON.parse(localStorage.getItem('logindata'));
    // console.log('login data = ', this.loginData);
    if (this.loginData.type === 'admin') {
      this.socket.on('admin', function (data) {
        if (data.loginData.display_name !== this.loginData.display_name) {
          this.alertsSocket(data.message);
        }
      }.bind(this));

      this.socket.on('staff', function (data) {
        // console.log('socker data', data);
        if (data.loginData.display_name !== this.loginData.display_name) {
          this.alertsSocket(data.message);
        }
      }.bind(this));

      this.socket.on('customer', function (data) {
        if (data.loginData.display_name !== this.loginData.display_name) {
          this.alertsSocket(data.message);
        }
      }.bind(this));
    } else if (this.loginData.type === 'staff') {
      this.socket.on('staff', function (data) {
        // console.log('socker data', data);
        if (data.loginData.display_name !== this.loginData.display_name) {
          this.alertsSocket(data.message);
        }
      }.bind(this));

      this.socket.on('customer', function (data) {
        if (data.loginData.display_name !== this.loginData.display_name) {
          this.alertsSocket(data.message);
        }
      }.bind(this));
    } else {
      this.socket.on('customer', function (data) {
        if (data.loginData.display_name !== this.loginData.display_name) {
          this.alertsSocket(data.message);
        }
      }.bind(this));
    }
  }

  public alertsSocket(message: any) {
    this.alerts.info(message);
  }
}
