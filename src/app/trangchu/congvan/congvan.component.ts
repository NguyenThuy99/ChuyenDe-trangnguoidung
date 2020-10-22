import { Component, OnInit, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseComponent } from 'src/app/lib/base.component';

@Component({
  selector: 'app-congvan',
  templateUrl: './congvan.component.html',
  styleUrls: ['./congvan.component.css']
})
export class CongvanComponent extends BaseComponent implements OnInit {
  loaicd: any;
  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    Observable.combineLatest(
      this._api.get('api/loaichude/get-all-loaichude'),
    ).takeUntil(this.unsubscribe).subscribe(res => {
      this.loaicd = res[0];
      setTimeout(() => {
        this.loadScripts();
      });
    }, err => { });
  }
}

