import { Component, OnInit, Input, ElementRef, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../../service/api.service';
import { RootscopeService } from '../../../../service/rootscope.service';
import { Uploader } from 'angular2-http-file-upload';
import { MyUploadItem } from '../../../../upload-item';
import { DialogService } from '../../../../service/dialog.service';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.scss']
})
export class ProductManagerComponent implements OnInit {
  // Block UI varable
  @BlockUI() blockUI: NgBlockUI;

  // Data ID from parent page
  @Input() productId: any;

  // Sent something to parent
  @Output() childResult: EventEmitter<number> = new EventEmitter();

  // Public varable
  public error: any = '';
  public storage: any;
  public product = {
    id: '',
    code: '',
    name: '',
    desc: '',
    price: 0,
    cost: 0,
    pic_id: <any>[],
    pic_ids: '',
    staffid: '0',
    category: '',
    productImage: <any>null,
    coverId: '0',
    recommend: false
  };
  public categoryLists = [];
  public selectedStatus: any = 'Y';
  public productPicName: any[] = [];
  public uploadedFiles: any[] = [];
  public uploadUrl: any = '/api/upload/product';
  public imgLink: any = '';
  public warningmsg: any = '';
  public dialogmsg: any = '';
  public imgIndex: any = 0;
  public dialog: any;

  public constructor(
    public router: Router,
    public route: ActivatedRoute,
    public apiService: ApiService,
    public $rootScope: RootscopeService,
    public uploaderService: Uploader,
    public _elRef: ElementRef,
    public dialogService: DialogService
  ) {
    this.storage = localStorage;
  }

  public ngOnInit() {
    console.log('product_managet.component');
      this.uploadUrl = this.apiService.upl + this.uploadUrl;
      this.imgLink = this.apiService.img;
      if (this.storage.getItem('logindata')) {
          const logindata = JSON.parse(this.storage.getItem('logindata'));
          this.product.staffid = logindata.id;
      }
      if (this.route.snapshot.paramMap.has('id')) {
        this.product.id = this.route.snapshot.paramMap.get('id');
      } else {
        this.product.id = this.productId;
      }
      this.dialog = this.dialogService.build(document.querySelector('dialog'));
      this.getCategoryList();
  }

  public getCategoryList(): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      const param = {};
      this.apiService
        .post('/api/category/category_list', param)
        .subscribe(
        (data) => {
          if (data.status === true) {
            for (let i = 0; i < data.data.length; i++) {
              this.categoryLists.push({ label: data.data[i].cate_name, value: data.data[i].id });
            }
              this.product.category = data.data[0].id;
              if (this.product.id !== 'create') {
                this.getProductByid(this.product.id);
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

  getProductByid(prodId: any) {
  this.blockUI.start('Loading...');
  const param = {
    product_id: prodId
  };
  this.apiService
    .post('/api/product/getproductbyid', param)
    .subscribe(
      res => this.getProductByidDoneAction(res),
      error => this.getProductByidErrorAction(error)
    );
  }

  getProductByidDoneAction(res) {
    if (res.status === true) {
      const prodResData = res.data;
      this.product.id = prodResData.id;
      this.product.name = prodResData.product_name;
      this.product.desc = prodResData.product_description;
      this.product.price = prodResData.product_price;
      this.product.cost = prodResData.product_cost;
      this.product.category = prodResData.category_id;
      this.product.code = 'Product code: ' + prodResData.code;

      if (prodResData.recommend === 'Y') {
        this.product.recommend = true;
      } else {
        this.product.recommend = false;
      }

      const pic_name = prodResData.pic;
      if (pic_name !== undefined && pic_name.length > 0) {
        for (let z = 0; z < pic_name.length; z++) {
          pic_name[z].productpic_path = this.imgLink + pic_name[z].productpic_path;
          pic_name[z].flag = 'u';
        }
      }
      this.uploadedFiles = (pic_name === undefined) ? [] : pic_name;
    }
    this.blockUI.stop();
  }

  getProductByidErrorAction(error) {
    this.blockUI.stop();
  }

}
