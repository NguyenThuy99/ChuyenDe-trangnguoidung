import { Component,Injector, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { BaseComponent } from 'src/app/lib/base.component';

@Component({
  selector: 'app-thucdon',
  templateUrl: './thucdon.component.html',
  styleUrls: ['./thucdon.component.css']
})

export class ThucdonComponent extends BaseComponent implements OnInit {
thucdon:any;thucdonbynamhoc:any;
single_thucdon:any;
loaichude:any;
formluachon:any;
  constructor(private fb:FormBuilder,injector: Injector) {
    super(injector);
  }
  ngOnInit(): void {
    Observable.combineLatest(
      this._api.get('api/thucdon/get-all'),
    ).takeUntil(this.unsubscribe).subscribe(res => {
      this.thucdon = res[0];
      setTimeout(() => {
        this.loadScripts();
      });
    }, err => { });
    Observable.combineLatest(
      this._api.get('api/loaichude/get-all-loaichude'),
    ).takeUntil(this.unsubscribe).subscribe(res => {
      this.loaichude = res[0];
      setTimeout(() => {
        this.loadScripts();
      });
    }, err => { });

  }
  chonNamHoc(namhoc){
    this._api.get('api/thucdon/get-by-nam-hoc/'+namhoc).takeUntil(this.unsubscribe).subscribe(res => {
      this.thucdonbynamhoc = res;
    
    });
  }
  xemTheoLuaChon(value){
   
    this._api.get('api/thucdon/get-by-id/'+value).takeUntil(this.unsubscribe).subscribe(res => {
      this.single_thucdon = res;
    
    });
  }
  formLC(){
    this.formluachon=this.fb.group({
      'tuan':['', Validators.required],
      'nam_batdau':['', Validators.required]
    });
  }
  }
  
