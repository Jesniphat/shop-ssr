import { Component, OnInit } from '@angular/core';
import { BrowserModule, Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { BlockUI, NgBlockUI } from 'ng-block-ui';

import { ApiService } from '../../service/api.service';
import { MenuListService } from '../../service/menu-list.service';
import { SocketService } from '../../service/socket.service';
import { AlertsService } from '../../service/alerts.service';
import { RootscopeService } from '../../service/rootscope.service';

declare const $: any;

@Component({
  selector: 'app-manager-side',
  templateUrl: './manager-side.component.html',
  styleUrls: ['./manager-side.component.scss']
})
export class ManagerSideComponent implements OnInit {
  /**
   * Block UI variable
   */
  @BlockUI() blockUI: NgBlockUI; // Load block UI

  /**
   * public variable
   */
  public menuLists = [];
  public headerText: any = '';

  /**
   * Constructor
   *
   * @param apiService
   * @param menuListService
   * @param router
   * @param socketService
   * @param alertsService
   */
  constructor(
    private apiService: ApiService,
    private menuListService: MenuListService,
    private router: Router,
    public socketService: SocketService,
    public alertsService: AlertsService,
    public $rootScope: RootscopeService
  ) {
    const that = this;
    // Change style of top container on scroll
    window.onscroll = function () {
      that.scrollFunction();
    };
  }

  /**
   * Init
   *
   * @access public
   * @returns void
   */
  public ngOnInit() {
    console.log('ManagerSite');
    this.$rootScope.doBlock$.subscribe(data => this.block(data));
    this.$rootScope.headerText$.subscribe(text => this.headerText = text || '');
    this.menuListService.menuList$.subscribe(data => this.menu(data));

    this.menuListService.getMenuList(true, 'system');
  }

  /**
   * Ping
   *
   * @param data
   * @access public
   */
  public pingDoneAction(data: any) {
    // console.log("OK");
  }

  /**
   * Ping Error
   *
   * @param error
   * @access public
   */
  public pingErrorAction(error: any) {
    console.log(error);
  }

  /**
   * Open Site bar
   * @access public
   * @returns void
   */
  public w3_open() {
    document.getElementById('mySidebar').style.display = 'block';
    document.getElementById('myOverlay').style.display = 'block';
  }

  /**
   * Close site bar
   * @access public
   * @returns void
   */
  public w3_close() {
    document.getElementById('mySidebar').style.display = 'none';
    document.getElementById('myOverlay').style.display = 'none';
  }

  /**
   * Scroll
   * @access public
   * @returns void
   */
  public scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.getElementById('myTop').classList.add('w3-card-4', 'w3-animate-opacity');
      document.getElementById('myIntro').classList.add('w3-show-inline-block');
    } else {
      document.getElementById('myIntro').classList.remove('w3-show-inline-block');
      document.getElementById('myTop').classList.remove('w3-card-4', 'w3-animate-opacity');
    }
  }

  /**
   * Map menu data
   * @param data
   * @access public
   * @returns void
   */
  public menu(data) {
    this.menuLists = data;
  }

/**
 * Block Ui action
 *
 * @param obj
 * @access public
 */
  public block(obj: any) {
    if (obj.block === true && obj.block !== undefined) {
      this.blockUI.start('Loading...');
    }else {
      this.blockUI.stop();
    }
  }

}
