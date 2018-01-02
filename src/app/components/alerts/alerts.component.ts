import { Component, OnInit, ElementRef, Inject, PLATFORM_ID} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { AlertsService } from '../../service/alerts.service';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit {
  public success: any = 'none';
  public info: any = 'none';
  public warning: any = 'none';
  public danger: any = 'none';

  public message: any = '';

  constructor(
    @Inject(PLATFORM_ID) private platformId: object, // Get platform is cliend and server
    private alertsService: AlertsService
  ) { }

  ngOnInit() {
    this.alertsService.alerts$.subscribe(data => this.setAlerts(data));
  }

  public setAlerts(data: any) {
    this.message = data.message;
    if (data.type === 'success') {
      document.getElementById('success').style.display  = 'block';
      setTimeout(function() {
        document.getElementById('success').style.display = 'none';
      }, 5000);
    } else if (data.type === 'info') {
      document.getElementById('info').style.display  = 'block';
      setTimeout(function() {
        document.getElementById('info').style.display = 'none';
      }, 5000);
    } else if (data.type === 'warning') {
      document.getElementById('warning').style.display = 'block';
      setTimeout(function() {
        document.getElementById('warning').style.display = 'none';
      }, 5000);
    } else if (data.type === 'danger') {
      document.getElementById('danger').style.display  = 'block';
      setTimeout(function() {
        document.getElementById('danger').style.display = 'none';
      }, 5000);
    }
  }

}
