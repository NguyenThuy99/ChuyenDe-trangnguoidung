import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrangchuComponent } from './trangchu.component';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './layout/menu/menu.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { GioithieuComponent } from './gioithieu/gioithieu.component';
import { CocautochucComponent } from './cocautochuc/cocautochuc.component';
import { CongvanComponent } from './congvan/congvan.component';
import { TintucComponent } from './tintuc/tintuc.component';
import { ThucdonComponent } from './thucdon/thucdon.component';
import { LienheComponent } from './lienhe/lienhe.component';
import { QuanlyComponent } from './quanly/quanly.component';
import { ChitiettintucComponent } from './chitiettintuc/chitiettintuc.component';
import { HoatdongComponent } from './hoatdong/hoatdong.component';
import { ChudeComponent } from './chude/chude.component';
import { ChitietchudeComponent } from './chitietchude/chitietchude.component';

export const trangchuRoutes :Routes = [
  {path: '', component: TrangchuComponent,
  children: [
    {
        path: '', component: HomeComponent
    },
    {
      path: 'gioithieu', component: GioithieuComponent
    },
    {
      path: 'cocautochuc', component: CocautochucComponent
    },
    {
      path: 'congvan', component: CongvanComponent
    },
    {
      path: 'tintuc/:id', component: TintucComponent
    },
    {
      path: 'thucdon', component: ThucdonComponent
    },
    {
      path: 'lienhe', component: LienheComponent
    },
    {
      path: 'quanly', component: QuanlyComponent
    },
    {
      path: 'hoatdong', component: HoatdongComponent
    },
    {
      path: 'chitiettintuc/:id', component: ChitiettintucComponent
    },
    {
      path: 'chitietchude/:id', component: ChitietchudeComponent
    },
    {
      path: 'chude/:id', component: ChudeComponent
    }
  ]
}
];

@NgModule({
  declarations: [TrangchuComponent, MenuComponent, FooterComponent, HomeComponent, GioithieuComponent, CocautochucComponent, CongvanComponent, TintucComponent, ThucdonComponent, LienheComponent, QuanlyComponent, ChitiettintucComponent,HoatdongComponent, ChudeComponent, ChitietchudeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(trangchuRoutes)
  ]
})
export class TrangchuModule { }
