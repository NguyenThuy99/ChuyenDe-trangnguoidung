
import { Component, OnInit, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/takeUntil';
import { BaseComponent } from 'src/app/lib/base.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends BaseComponent implements OnInit {
  loaitin: any;
  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    Observable.combineLatest(
      this._api.get('api/loaitin/get-all-loai'),
    ).takeUntil(this.unsubscribe).subscribe(res => {
      this.loaitin = res[0];
      setTimeout(() => {
        this.loadScripts();
      });
    }, err => { });
  }
}
