import { Component, OnInit,Injector } from '@angular/core';
import { BaseComponent } from 'src/app/lib/base.component';

@Component({
  selector: 'app-chude',
  templateUrl: './chude.component.html',
  styleUrls: ['./chude.component.css']
})
export class ChudeComponent extends BaseComponent implements OnInit {

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
  }

}
