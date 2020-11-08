import { Component,Injector, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseComponent } from 'src/app/lib/base.component';

@Component({
  selector: 'app-thucdon',
  templateUrl: './thucdon.component.html',
  styleUrls: ['./thucdon.component.css']
})
export class ThucdonComponent extends BaseComponent implements OnInit {
thucdon:any;
loaichude:any;
  constructor(injector: Injector) {
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
  }
  
