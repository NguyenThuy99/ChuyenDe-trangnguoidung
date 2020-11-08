import { Component, OnInit,Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseComponent } from 'src/app/lib/base.component';

@Component({
  selector: 'app-chude',
  templateUrl: './chude.component.html',
  styleUrls: ['./chude.component.css']
})
export class ChudeComponent extends BaseComponent implements OnInit {
  loaichude:any;
  chude:any;
  constructor(injector: Injector) { 
    super(injector);
  }

  ngOnInit(): void {
    this.chude = [];
    this._route.params.subscribe(params => {
      let id = params['id'];
      this._api.get('api/chude/get-tin-theo-loaichude/'+id).takeUntil(this.unsubscribe).subscribe(res => {
        this.chude = res;
        console.log(this.chude);
        setTimeout(() => {
         // this.loadScripts();
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


