import { Injectable } from '@angular/core';
import { AlertsService } from './alerts.service';
import * as io from 'socket.io-client';

@Injectable()
export class SocketReceiveService {
  /**
   * Socket cliend
   */
  public socket = io('http://localhost:8880');
  public loginData: any;

  constructor(public alerts: AlertsService) {
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
