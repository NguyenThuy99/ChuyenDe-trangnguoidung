import { Component,Injector, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { BaseComponent } from 'src/app/lib/base.component';

@Component({
  selector: 'app-hoatdong',
  templateUrl: './hoatdong.component.html',
  styleUrls: ['./hoatdong.component.css']
})
export class HoatdongComponent extends BaseComponent implements OnInit {
  quangcao: any;
  loaiqc: any;
  loaichude:any;
  constructor(injector: Injector, private _sanitizer: DomSanitizer) {
    super(injector);
  }

  ngOnInit(): void {
    Observable.combineLatest(
      this._api.get('api/quangcao/get-all-quangcao'),
    ).takeUntil(this.unsubscribe).subscribe(res => {
      this.quangcao = res[0];

      this.quangcao.map((res: any) => {
        res.video = this._sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + res.video);
        return res;
      });
      
      setTimeout(() => {
        this.loadScripts();
      });
    }, err => { })
    Observable.combineLatest(
      this._api.get('api/loaiquangcao/get-all-loaiquangcao'),).takeUntil(this.unsubscribe).subscribe(
      res => {
        this.loaiqc = res[0];
        console.log(this.loaiqc);
      }, err => { })
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
