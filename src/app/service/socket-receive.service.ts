import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AlertsService } from './alerts.service';
import * as io from 'socket.io-client';

@Injectable()
export class SocketReceiveService {
  /**
   * Socket cliend
   */
  public socket = io('http://localhost:8880');
  public loginData: any;

  /**
   * Observable varable
   */
  public socketGetData$: Observable<any>;

  /**
   * Next Varable
   */
  private _socketGetData: any;

  constructor(public alerts: AlertsService) {
    // Build Observe data
    this.socketGetData$ = new Observable(observer => this._socketGetData = observer);

    // Receive data from socket server
    this.loginData = JSON.parse(localStorage.getItem('logindata'));
    if (this.loginData !== null) {
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
  }

  /**
   * Alert message from socket server
   * @param message
   * @access public
   * @returns void
   */
  public alertsSocket(message: any) {
    // alerts messager in the page
    this.alerts.info(message);

    // Sent data for Observer
    this.sentSocketData(message);
  }

  /**
   * Set some data to Observer varable
   * @param data
   * @access public
   * @returns void
   */
  public sentSocketData(data: any) {
    // do some thing
  }

}
