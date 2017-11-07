import { Component, OnInit } from '@angular/core';
import { BrowserModule, Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-manager-dashboard',
  templateUrl: './manager-dashboard.component.html',
  styleUrls: ['./manager-dashboard.component.scss']
})
export class ManagerDashboardComponent implements OnInit {

  constructor(
    public meta: Meta,
    public title: Title
  ) {
    title.setTitle('My Spiffy Dashboard Page');

        meta.addTags([
          { name: 'author',   content: 'Coursetro.com'},
          { name: 'keywords', content: 'angular seo, angular 4 universal, etc'},
          { name: 'description', content: 'This is my Angular SEO-based App, enjoy it!' }
        ]);
  }

  ngOnInit() {
  }

}
