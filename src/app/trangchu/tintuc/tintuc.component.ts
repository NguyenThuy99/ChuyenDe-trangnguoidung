import { Component, Injector, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseComponent } from 'src/app/lib/base.component';

@Component({
  selector: 'app-tintuc',
  templateUrl: './tintuc.component.html',
  styleUrls: ['./tintuc.component.css']
})
export class TintucComponent extends BaseComponent implements OnInit {
  loaichude:any;
  tintuc:any;
  constructor(injector: Injector) { 
    super(injector);
  }

  ngOnInit(): void {
   
    this.tintuc = [];
    this._route.params.subscribe(params => {
      let id = params['id'];
      this._api.get('api/tintuc/get-tin-theo-loai/'+id).takeUntil(this.unsubscribe).subscribe(res => {
        this.tintuc = res;
        console.log(this.tintuc);
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
