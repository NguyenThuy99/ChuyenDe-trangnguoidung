import { Component,Injector, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseComponent } from 'src/app/lib/base.component';

@Component({
  selector: 'app-hoatdong',
  templateUrl: './hoatdong.component.html',
  styleUrls: ['./hoatdong.component.css']
})
export class HoatdongComponent extends BaseComponent implements OnInit {
  quangcao: any;
  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    Observable.combineLatest(
      this._api.get('api/quangcao/get-all-quangcao'),
    ).takeUntil(this.unsubscribe).subscribe(res => {
      this.quangcao = res[0];
      setTimeout(() => {
        this.loadScripts();
      });
    }, err => { });
  }
}
