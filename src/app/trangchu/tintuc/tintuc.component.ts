import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/lib/base.component';

@Component({
  selector: 'app-tintuc',
  templateUrl: './tintuc.component.html',
  styleUrls: ['./tintuc.component.css']
})
export class TintucComponent extends BaseComponent implements OnInit {
  public tintucs;

  constructor(injector: Injector) { 
    super(injector);
  }

  ngOnInit(): void {
    console.log(123)
      this._api.get('/api/TinTucs').toPromise()
      .then(res => {
        this.tintucs = res;
      }).catch(err => console.error(err));
  }

}
