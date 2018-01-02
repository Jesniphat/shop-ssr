import { Component, OnInit, Input, ElementRef, Output, EventEmitter, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../../service/api.service';
import { RootscopeService } from '../../../../service/rootscope.service';
import { Uploader } from 'angular2-http-file-upload';
import { MyUploadItem } from '../../../../upload-item';
import { DialogService } from '../../../../service/dialog.service';
import { AlertsService } from '../../../../service/alerts.service';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.scss']
})
export class ProductManagerComponent implements OnInit {
  /**
   * Data ID from parent page
   */
  @Input() productId: any;
  @Input() modelOpen: any = false;

  /**
   * Sent something to parent
   */
  @Output() createProductResult: EventEmitter<number> = new EventEmitter();

  /**
   * Public varable
   */
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

  /**
   * Class constructor
   * @param router Service
   * @param route Service
   * @param apiService ApiService
   * @param $rootScope RootScropeService
   * @param uploaderService Upload Service
   * @param _elRef DOM
   * @param alerts Popup Service
   */
  public constructor(
    @Inject(PLATFORM_ID) private platformId: object, // Get platform is cliend and server
    public router: Router,
    public route: ActivatedRoute,
    public apiService: ApiService,
    public $rootScope: RootscopeService,
    public uploaderService: Uploader,
    public _elRef: ElementRef,
    public alerts: AlertsService
  ) {
    // this.storage = localStorage;
  }

  /**
   * Start automatic fuction
   * @access public
   */
  public ngOnInit() {
    console.log('product_managet.component');
    if (isPlatformBrowser(this.platformId)) {
      // Do something if want to use only cliend site.
      this.storage = localStorage;
    }
      this.uploadUrl = this.apiService.upl + this.uploadUrl;
      this.imgLink = this.apiService.img;
      if (this.storage.getItem('logindata')) {
          const logindata = JSON.parse(this.storage.getItem('logindata'));
          this.product.staffid = logindata.id;
      }
      if (this.route.snapshot.paramMap.has('id')) {
        this.$rootScope.changeHeaderText('Product Manager');
        this.product.id = this.route.snapshot.paramMap.get('id');
      } else {
        this.product.id = this.productId;
      }
      // this.dialog = this.dialogService.build(document.querySelector('dialog'));
      this.getCategoryList();
  }

  /**
   * Get category list for select box
   * @access public
   */
  public getCategoryList(): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      const param = {};
      this.apiService
        .get('/api/category')
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

  /**
   * Get product by id
   * @param prodId
   * @access public
   */
  public getProductByid(prodId: any) {
  this.$rootScope.setBlock(true, 'Loading...');
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

  /**
   * Get productio done.
   * @param res
   * @access private
   */
  private getProductByidDoneAction(res) {
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
          pic_name[z].productpic_path = /* this.imgLink + */ pic_name[z].productpic_path;
          pic_name[z].flag = 'u';
        }
      }
      this.uploadedFiles = (pic_name === undefined) ? [] : pic_name;
    }
    this.$rootScope.setBlock(false);
  }

  /**
   * Get product  by id error
   * @param error
   * @access private
   */
  private getProductByidErrorAction(error) {
    this.$rootScope.setBlock(false);
    console.log('Get product by id error ', error);
  }

  /**
   * Changer category
   * @param newValue
   * @access public
   */
  public changeCategory(newValue: any) {
    console.log(newValue);
    this.product.category = newValue;
  }

  /**
   * Upload file photo
   * @param data
   * @access public
   */
  public uploadFile(data: any) {
    this.$rootScope.setBlock(true, 'Uploading...');
    console.log('file = ', data.target.files[0]);
    const uploadFile = data.target.files[0];

    const myUploadItem = new MyUploadItem(uploadFile, this.uploadUrl);
    myUploadItem.formData = { FormDataKey: 'Form Data Value' };  // (optional) form data can be sent with file

    this.uploaderService.onSuccessUpload = (item, response, status, headers) => {
      // console.log("onSuccessUpload = ", response);
      let pic_name: any;
      if (typeof response === 'string') {
        pic_name = JSON.parse(response);
      } else {
        pic_name = response;
      }

      // let pic_name = JSON.parse(response);
      if (pic_name.status === true) {
        pic_name.data.productpic_path = /* this.imgLink + */ pic_name.data.productpic_path;
        pic_name.data.flag = 'c';
        if (this.uploadedFiles.length === 0) {
          pic_name.data.cover = 'Y';
          this.product.coverId = pic_name.data.id;
        }
        this.uploadedFiles.push(pic_name.data);
        console.log('upload seccess');
      } else {
        console.log('error = ', pic_name.error);
        this.alerts.warning('บันทึกรูปภาพไม่สำเร็จกรุณาลองใหม่อีกครั้ง');
      }
      this.product.productImage = '';
      this.$rootScope.setBlock(false);
    };
    this.uploaderService.onErrorUpload = (item, response, status, headers) => {
      console.log('onErrorUpload = ', response);
      this.$rootScope.setBlock(false);
    };
    this.uploaderService.upload(myUploadItem);
  }

  /**
   * Check before save
   * @access public
   */
  public checkBeforSave() {
    if ((this.uploadedFiles).length === 0) {
      this.warningmsg = 'Warning!';
      this.dialogmsg = 'You doesn\'t upload product picture. Do you want to save this product?';
      // $('#productSaveModel').modal('show');
    } else {
      // this.warningmsg = "Save product";
      // this.dialogmsg = "Are you sure that you want to save this product?";
      // $('#productSaveModel').modal('show');
      this.saveProduct();
    }
  }

  /**
   * Save product
   * @access public
   */
  public saveProduct() {
    this.$rootScope.setBlock(true, 'Saving...');
    if (this.uploadedFiles !== undefined && (this.uploadedFiles).length > 0) {
      for (let i = 0; i < this.uploadedFiles.length; i++) {
        (this.product.pic_id).push(this.uploadedFiles[i].id);
      }
    }
    if (this.product.id === 'create') {
      this.apiService
      .post('/api/product', this.product)
      .subscribe(
        res => this.saveProductDoneAction(res),
        error => this.saveProductErrorAction(error)
      );
    } else {
      this.apiService
      .put('/api/product', this.product)
      .subscribe(
        res => this.saveProductDoneAction(res),
        error => this.saveProductErrorAction(error)
      );
    }
  }

  /**
   * Save product done action
   * @param res
   * @access private
   */
  private saveProductDoneAction(res: any) {
    console.log('res = ', res);
    if (res.status === true) {
      this.reset();
      this.alerts.success('บันทึกข้อมูลสำเร็จ');
      this.createProductResult.emit(1);
    } else {
      console.log('can\'t save ', res.error);
      this.alerts.warning('บันทึกข้อมูลไม่สำเร็จ');
      this.createProductResult.emit(0);
    }
    this.$rootScope.setBlock(false);
  }


  /**
   * Save product error
   * @param error
   * @access private
   */
  private saveProductErrorAction(error: any) {
    this.error = error.message;
    console.log('error = ', this.error);
    this.alerts.warning('บันทึกข้อมูลไม่สำเร็จ');
    this.$rootScope.setBlock(false);
    this.createProductResult.emit(0);
  }

  /**
   * Submit
   * @param value
   * @access public
   */
  public onSubmit(value: any) {
    console.log('value submit = ', value);
  }

  /**
   * Before remove product img.
   * @param id
   * @param index
   * @access public
   */
  public beforeRemoveImg(id: any, index: any) {
    console.log('id = ', id, '  index = ', index);
    this.imgIndex = index;
    // $('#productImgModel').modal('show');
  }

  /**
   * Remove img.
   * @param id
   * @param index
   * @access public
   */
  public removeImg(id: any = null, index: any = null) {
    if (index) {
      this.imgIndex = index;
    }
    console.log('index = ', this.imgIndex);
    this.uploadedFiles.splice(this.imgIndex, 1);
  }

  /**
   * Set cover pic
   * @param id
   * @access public
   */
  public setCoverPic(id: any) {
    // console.log(id);
    this.product.coverId = id;
  }

  /**
   * Check recommend
   * @access public
   */
  public checkRecommend() {
    // console.log(this.product.recommend);
  }

  /**
   * Close by click cancel bt.
   * @access public
   */
  public close() {
    this.reset();
    this.createProductResult.emit(1);
  }

  /**
   * Reset function
   * @access public
   */
  public reset() {
    this.product = {
      id: 'create',
      code: '',
      name: '',
      desc: '',
      price: 0,
      cost: 0,
      pic_id: [],
      staffid: this.product.staffid,
      pic_ids: '',
      category: this.categoryLists[0].id,
      productImage: <any>null,
      coverId: '0',
      recommend: false
    };
    this.uploadedFiles = [];
  }

}
