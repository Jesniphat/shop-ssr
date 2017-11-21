import { Component } from '@angular/core';
import { AlertsComponent } from './components/alerts/alerts.component';
import { SocketReceiveService } from './service/socket-receive.service';
import { AlertsService } from './service/alerts.service';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(public alerts: AlertsService, public socketReceiveService: SocketReceiveService) {}
}
