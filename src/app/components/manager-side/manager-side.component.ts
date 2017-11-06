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
    public meta: Meta,
    public title: Title,
    private apiService: ApiService,
    private menuListService: MenuListService,
    private router: Router
  ) {
    title.setTitle('My Spiffy Home Page');

    meta.addTags([
      { name: 'author',   content: 'Coursetro.com'},
      { name: 'keywords', content: 'angular seo, angular 4 universal, etc'},
      { name: 'description', content: 'This is my Angular SEO-based App, enjoy it!' }
    ]);
  }

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

  public menu(data){
    this.menuLists = data;
  }

}
