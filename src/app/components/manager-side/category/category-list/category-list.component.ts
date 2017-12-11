import { Component, OnInit, Input, ElementRef, Inject, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../../../service/api.service';
import { RootscopeService } from '../../../../service/rootscope.service';

import { TableElementComponent } from '../../table-element/table-element.component';
import { CategoryManagerComponent } from '../category-manager/category-manager.component';

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
  public categoryId: any = 'create';

  public dialog;

  /**
	 * Set view child from product manage
	 */
  @ViewChild(TableElementComponent) private tableElementComponent: TableElementComponent;
  @ViewChild(CategoryManagerComponent) private categoryManagerComponent: CategoryManagerComponent;

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
    this.$rootScope.changeHeaderText('category list');
    console.log('category_list.component');
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
    this.apiService
      .get('/api/category')
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
    const categoryColumn = [
      {'name': 'Name', 'column': 'cate_name'},
      {'name': 'Description', 'column': 'cate_description'}
    ];
    const action = {
      status: true,
      edit: true,
      delete: false
    };
    this.tableElementComponent.getTableDataLists({list: data.data, column: categoryColumn, action: action});
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

  /**
	 * Add category function
	 *
	 * @access public
	 * @param data
	 * @return void
	 */
  public add_new_category(id: any) {
    document.getElementById('addcatemodel').style.display = 'block';
    // let link: any;
    // if(data == 'create'){
    // 		link = ['/category_list/create_cate', data];
    // }else{
    // 		link = ['/category_list/create_cate', data.id];
    // }
    // this.router.navigate(link);

    // this.dialog.showModal();
    if (id === 'create') {
      this.categoryId = id;
      this.categoryManagerComponent.reset();
    }else {
      this.categoryId = id;
      this.categoryManagerComponent.getCategoryByid(id);
    }
  }

  /**
   * Data return from child table component
   * @param any event
   */
  public tableReturn(event: any) {
    console.log(event);
  }

  /**
   * Create category result for child
   * @param result
   * @access public
   * @returns void
   */
  public createCateResult(result: any) {
    if (result) {
      document.getElementById('addcatemodel').style.display = 'none';
      this.getCategoryList();
    }
  }

  /**
   * Get data for edit function from child
   * @param data
   * @access public
   * @returns void
   */
  public getDataEdit(data: any) {
    this.add_new_category(data.id);
  }

}
