import { Component, OnInit, Input, ElementRef, Output, EventEmitter } from '@angular/core';
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
    public alerts: AlertsService
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
      // this.dialog = this.dialogService.build(document.querySelector('dialog'));
      this.getCategoryList();
  }

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

  public getProductByid(prodId: any) {
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

  public getProductByidDoneAction(res) {
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

  public getProductByidErrorAction(error) {
    this.blockUI.stop();
  }

  public changeCategory(newValue: any) {
    console.log(newValue);
    this.product.category = newValue;
  }

  public uploadFile(data: any) {
    this.blockUI.start('Uploading...');
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
        pic_name.data.productpic_path = this.imgLink + pic_name.data.productpic_path;
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
      this.blockUI.stop();
    };
    this.uploaderService.onErrorUpload = (item, response, status, headers) => {
      console.log('onErrorUpload = ', response);
      this.blockUI.stop();
    };
    this.uploaderService.upload(myUploadItem);
  }

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

  public saveProduct() {
    this.blockUI.start('Saving...');
    if (this.uploadedFiles !== undefined && (this.uploadedFiles).length > 0) {
      for (let i = 0; i < this.uploadedFiles.length; i++) {
        (this.product.pic_id).push(this.uploadedFiles[i].id);
      }
    }
    this.apiService
      .post('/api/product/saveproduct', this.product)
      .subscribe(
        res => this.saveProductDoneAction(res),
        error => this.saveProductErrorAction(error)
      );
  }

  private saveProductDoneAction(res: any) {
    console.log('res = ', res);
    if (res.status === true) {
      this.reset();
      this.alerts.success('บันทึกข้อมูลสำเร็จ');
      this.childResult.emit(1);
    } else {
      console.log('can\'t save ', res.error);
      this.alerts.warning('บันทึกข้อมูลไม่สำเร็จ');
      this.childResult.emit(0);
    }
    this.blockUI.stop();
  }

  private saveProductErrorAction(error: any) {
    this.error = error.message;
    console.log('error = ', this.error);
    this.alerts.warning('บันทึกข้อมูลไม่สำเร็จ');
    this.blockUI.stop();
    this.childResult.emit(0);
  }

  onSubmit(value: any) {
    console.log('value submit = ', value);
  }

  beforeRemoveImg(id: any, index: any) {
    console.log('id = ', id, '  index = ', index);
    this.imgIndex = index;
    // $('#productImgModel').modal('show');
  }

  removeImg() {
    console.log('index = ', this.imgIndex);
    this.uploadedFiles.splice(this.imgIndex, 1);
  }

  setCoverPic(id: any) {
    // console.log(id);
    this.product.coverId = id;
  }

  checkRecommend() {
    console.log(this.product.recommend);
  }

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
