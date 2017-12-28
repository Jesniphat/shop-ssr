import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { BrowserModule, Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ApiService } from '../../../../service/api.service';
import { RootscopeService } from '../../../../service/rootscope.service';
// import { ProductManageComponent } from '../product-manage/product-manage.component';
import { ProductStorageService } from '../../../../service/product-storage.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  // @ViewChild(ProductManageComponent) public productManageComponent: ProductManageComponent;
  public error: any;
  public categoryLists = [];
  public productLists: any = [];
  public productList: any = [];
  public products: any = [];
  public filterText: any = '';
  public pageNo: any = 1;
  public uploadUrl: any = '/api/upload/product';
  public imgLink: any = '';
  public cols = ['product_name', 'product_description', 'product_qty', 'product_price'];
  public delete_id: any = '';
  public productId: any = 'create';

  constructor(
    public meta: Meta,
    public title: Title,
    public router: Router,
    public apiService: ApiService ,
    public $rootscope: RootscopeService,
    public _elRef: ElementRef,
    public productStoreService: ProductStorageService
  ) {
    title.setTitle('Product');
    meta.addTags([
      { name: 'author',   content: 'Coursetro.com'},
      { name: 'keywords', content: 'product page list manager'},
      { name: 'description', content: 'Show all product list and edit' }
    ]);
  }

  ngOnInit() {
    console.log('product_list.component');
    this.$rootscope.changeHeaderText('product list');

    this.uploadUrl = this.apiService.upl + this.uploadUrl;
    this.imgLink = this.apiService.img;
    this.getCategoryList();
    this.getAllProduct();
  }

  /**
   * Get category list
   *
   * @access private
   * @returns void
   */
  private getCategoryList(): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      // let param = {}
      this.apiService
        .get('/api/category')
        .subscribe(
        (data) => {
          if (data.status === true) {
            for (let i = 0; i < data.data.length; i++) {
                this.categoryLists.push({ label: data.data[i].cate_name, value: data.data[i].id });
            }
          } else {
            console.log('error = ', data.error);
          }
        },
        (error) => {
          console.log('error = ', error);
        }
      );
    });
  }

  /**
   * Get all Product
   * @access private
   * @returns void
   */
  private getAllProduct() {
    this.$rootscope.setBlock(true);
    this.apiService
      .get('/api/product')
      .subscribe(
        data => this.getAllProductDoneAction(data), // this.productLists = data.data,
        error => this.getAllProductErrorAction(error)
      );
  }

  /**
   * Get All pruduct done
   * @param data
   * @access private
   * @return void
   */
  private getAllProductDoneAction(data: any) {
    // console.log(data);
    this.productLists = data.data;
    // if (this.productLists.length > 0) {
    //   for (let z = 0; z < this.productLists.length; z++) {
    //       this.productLists[z].img = this.imgLink + this.productLists[z].img;
    //   }
    // }
    this.$rootscope.setBlock(false);
  }

  /**
   * Get All product error
   * @param error
   * @access private
   * @returns void
   */
  private getAllProductErrorAction(error: any) {
    this.error = error.message;
    console.log('errer = ', this.error);
    this.$rootscope.setBlock(false);
  }

  /**
   * Add new Product by dialog
   * @param data
   * @access public
   * @returns void
   */
  public add_new_product(data: any) {
    // let link: any;
    // if(data == 'create'){
    //    link = ['/product_list/product', data];
    // }
    // else{
    //    link = ['/product_list/product', data.id];
    // }
    // this.router.navigate(link);
    console.log('add new prod');
    // this.dialog.showModal();
    if (data === 'create') {
      this.productId = data;
      // this.productManageComponent.reset();
    } else {
      this.productId = data.id;
      // this.productManageComponent.getProductByid(data.id);
    }
  }

  /**
   * When click filter box goto 1 page
   * @access public
   * @returns void
   */
  public focusFilter() {
    this.pageNo = 1;
  }

  /**
   * Delete Product dialog
   * @param data
   * @access public
   * @returns void
   */
  public delete_product(data: any) {
    // console.log(data);
    this.delete_id = data.id;
    // $('#deleteProduct').modal('show');
    // this.deleteProductDialog.showModal();
  }

  /**
   * Delete Product
   * @access private
   * @return void
   */
  private removeProduct() {
    //   console.log(this.delete_id);
    const param = {'id': this.delete_id};
    this.apiService
    .post('/api/product/delete_product', param)
    .subscribe(
      (data) => {
        console.log(data);
        // toastr.success('ลบข้อมูลสำเร็จ', 'Success!');
        this.getAllProduct();
        // this.deleteProductDialog.close();
        this.productStoreService.deleteProductStore(param);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  /**
   * Return result from child
   * @param result
   * @access public
   * @returns void
   */
  public childReturn(result) {
    if (result) {
      this.getAllProduct();
      // this.dialog.close();
    } else {
      console.log('can\'t save');
    }
  }
}
