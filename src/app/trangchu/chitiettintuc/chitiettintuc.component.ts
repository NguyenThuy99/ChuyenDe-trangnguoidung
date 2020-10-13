import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/lib/base.component';

@Component({
  selector: 'app-chitiettintuc',
  templateUrl: './chitiettintuc.component.html',
  styleUrls: ['./chitiettintuc.component.css']
})
export class ChitiettintucComponent extends BaseComponent implements OnInit {
  item: any;
  constructor(injector: Injector) {
    super(injector);
  }
  ngOnInit(): void {
    this.item = {};
    this._route.params.subscribe(params => {
      let id = params['id'];
      this._api.get('api/tintuc/get-by-id/' + id).takeUntil(this.unsubscribe).subscribe(res => {
        this.item = res;
        setTimeout(() => {
          this.loadScripts();
        });
      });
    });

  }

}

