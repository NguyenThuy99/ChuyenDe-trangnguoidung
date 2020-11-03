import { Component, OnInit,Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseComponent } from 'src/app/lib/base.component';

@Component({
  selector: 'app-tkb',
  templateUrl: './tkb.component.html',
  styleUrls: ['./tkb.component.css']
})
export class TkbComponent  extends BaseComponent implements OnInit {

  tkb:any;
  constructor(injector: Injector) {
    super(injector);
  }
  ngOnInit(): void {
    Observable.combineLatest(
      this._api.get('api/tkb/get-all'),
    ).takeUntil(this.unsubscribe).subscribe(res => {
      this.tkb = res[0];
      setTimeout(() => {
        this.loadScripts();
      });
    }, err => { });
  }
}
