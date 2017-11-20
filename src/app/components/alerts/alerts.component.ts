import { Component, OnInit, ElementRef } from '@angular/core';
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

  constructor(private alertsService: AlertsService) { }

  ngOnInit() {
    this.alertsService.alerts$.subscribe(data => this.setAlerts(data));
  }

  public setAlerts(data: any) {
    this.message = data.message;
    if (data.type === 'success') {
      this.success = 'block';
      setTimeout(function() {
        this.success = 'none';
        document.getElementById('success').style.display = 'none';
      }, 3000);
    } else if (data.type === 'info') {
      this.info = 'block';
      setTimeout(function() {
        this.info = 'none';
        document.getElementById('info').style.display = 'none';
      }, 3000);
    } else if (data.type === 'warning') {
      this.warning = 'block';
      setTimeout(function() {
        this.warning = 'none';
        document.getElementById('warning').style.display = 'none';
      }, 3000);
    } else if (data.type === 'danger') {
      this.danger = 'block';
      setTimeout(function() {
        this.danger = 'none';
        document.getElementById('danger').style.display = 'none';
      }, 3000);
    }
  }

}
