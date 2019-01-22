import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';


import { AppRoutingModule } from '../app-routing.module';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [MyNavComponent, LayoutComponent],
  imports: [
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    AppRoutingModule
  ],
  exports: [
    MyNavComponent,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ]
})
export class SharedModule { }
/**
 * angular material 6
 * https://nitayneeman.com/posts/restructuring-an-angular-application-with-feature-modules/
 * https://www.techiediaries.com/angular-material-design/
 * https://code.tutsplus.com/tutorials/how-to-use-material-design-in-angular-6--cms-31671
 *
 * importing json in typescript
 * https://hackernoon.com/import-json-into-typescript-8d465beded79
 *
 * angular-deploy
 * https://shekhargulati.com/2017/07/06/angular-4-use-of-base-href-and-deploy-url-build-options/
 */
