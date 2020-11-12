import { Component, OnInit,Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseComponent } from 'src/app/lib/base.component';

@Component({
  selector: 'app-thuvienanh',
  templateUrl: './thuvienanh.component.html',
  styleUrls: ['./thuvienanh.component.css']
})
export class ThuvienanhComponent extends BaseComponent implements OnInit {

  loaichude: any;
  constructor(injector: Injector) {
    super(injector);
  }


  ngOnInit(): void {
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
