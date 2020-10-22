import { Component, OnInit,Injector } from '@angular/core';
import { BaseComponent } from 'src/app/lib/base.component';

@Component({
  selector: 'app-chitietchude',
  templateUrl: './chitietchude.component.html',
  styleUrls: ['./chitietchude.component.css']
})
export class ChitietchudeComponent extends BaseComponent implements OnInit {

  ctchude: any;
  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.ctchude = {};
    this._route.params.subscribe(params => {
      let id = params['id'];
      this._api.get('api/chude/get-by-id/' + id).takeUntil(this.unsubscribe).subscribe(res => {
        this.ctchude = res;
        setTimeout(() => {
          this.loadScripts();
        });
      });
    });

  }
}
