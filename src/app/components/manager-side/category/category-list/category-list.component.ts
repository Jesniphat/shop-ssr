import { Component, OnInit, Input, ElementRef, Inject, AfterViewInit, ViewChild, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { ApiService } from '../../../../service/api.service';
import { RootscopeService } from '../../../../service/rootscope.service';
declare const $: any;

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  /**
	 * Create var
	 */
  public item = 1;
  public error: any = '';
  // public query: string = '';
  public categoryLists: any = [];
  public categorys: any = [];
  public filterText: any = '';
  public pageNo: any = 1;

  public categoryId: any = 'create';

  public testPipes = '';
  public dialog;

  /**
	 * Class constructor
	 *
	 * @param router
	 * @param apiService
	 * @param
	 * @param dialogService
	 *
	 * @access public
	 *
	 * @return void
	 */
  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    public router: Router,
    public apiService: ApiService,
    public $rootScope: RootscopeService
  ) { }

  /**
	 * Get Category list
	 *
	 * @access public
	 * @return void
	 */
  public ngOnInit() {
    console.log('category_list.component');
    if (isPlatformBrowser(this.platformId)) {
      $('#jquery-text').text('jQuery works!');
    }
    // this.dialog = this.dialogService.build(document.getElementById('add-cate'));
    this.getCategoryList();
  }

  /**
	 * Get Category list
	 *
	 * @access public
	 * @return void
	 */
  public getCategoryList() {
    // this.$rootScope.setBlock(true);
    const param = { 'id': 'ทดสอบ' };
    this.apiService
      .post('/api/category/category_list', param)
      .subscribe(
      data => this.getCategoryDoneAction(data), // OR this.categoryLists = data.data,
      error => this.errorAction(error)
    );
  }

  /**
	 * When can get category list
	 *
	 * @param data
	 * @access public
	 * @return void
	 */
  public getCategoryDoneAction(data: any) {
    this.categoryLists = data.data;
    console.log(this.categoryLists);
    // this.$rootScope.setBlock(false);
  }


  /**
	 * When can't get caategory list
	 *
	 * @access public
	 * @param error
	 * @return void
	 */
  public errorAction(error: any) {
    this.error = error.message;
    console.log('errer = ', this.error);
    // this.$rootScope.setBlock(false);
  }

  public focusFilter() {
    this.pageNo = 1;
  }

  /**
	 * Add category function
	 *
	 * @access public
	 * @param data
	 * @return void
	 */
  public add_new_category(data: any) {
    console.log('add new cate = ', data);
    // let link: any;
    // if(data == 'create'){
    // 		link = ['/category_list/create_cate', data];
    // }else{
    // 		link = ['/category_list/create_cate', data.id];
    // }
    // this.router.navigate(link);

    // this.dialog.showModal();
    // if(data == 'create'){
    //   this.categoryId = data;
    //   this.categoryManageComponent.reset();
    // }else{
    //   this.categoryId = data;
    //   this.categoryManageComponent.getCategoryByid(data);
    // }
  }



}
