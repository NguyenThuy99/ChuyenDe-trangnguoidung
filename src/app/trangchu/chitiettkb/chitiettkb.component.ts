import { Component, OnInit,Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseComponent } from 'src/app/lib/base.component';

@Component({
  selector: 'app-chitiettkb',
  templateUrl: './chitiettkb.component.html',
  styleUrls: ['./chitiettkb.component.css']
})
export class ChitiettkbComponent extends BaseComponent implements OnInit  {
  cttkb:any;
  loaichude:any;
  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.cttkb = {};
    this._route.params.subscribe(params => {
      let id = params['id'];
      this._api.get('api/tkb/get-by-id/' + id).takeUntil(this.unsubscribe).subscribe(res => {
        this.cttkb = res;
        setTimeout(() => {
          this.loadScripts();
        });
      });
    });
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

