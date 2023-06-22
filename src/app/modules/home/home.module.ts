import { HomeComponent } from './components/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

import { HomeRoutingModule } from './home-routing.module';
import { LayoutModule } from 'src/app/layout/layout.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    LayoutModule,
    SharedModule,
    NgbCarouselModule,
  ],
  exports: [HomeComponent],
})
export class HomeModule {}
