import { Component, OnInit } from '@angular/core';
import { BrowserModule, Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { ApiService } from '../../service/api.service';
import { MenuListService } from '../../service/menu-list.service';

@Component({
  selector: 'app-manager-side',
  templateUrl: './manager-side.component.html',
  styleUrls: ['./manager-side.component.scss']
})
export class ManagerSideComponent implements OnInit {

  public menuLists = [];

  constructor(
    private apiService: ApiService,
    private menuListService: MenuListService,
    private router: Router
  ) {}

  public ngOnInit() {
    this.menuListService.$menuList.subscribe(data => this.menu(data));
    this.menuListService.getMenuList(true, 'system');
  }

  public pingDoneAction(data: any) {
    // console.log("OK");
  }

  public pingErrorAction(error: any) {
    console.log(error);
  }

  public w3_open() {
    document.getElementById('mySidebar').style.display = 'block';
  }

  public w3_close() {
    document.getElementById('mySidebar').style.display = 'none';
  }

  public menu(data) {
    this.menuLists = data;
  }

}
