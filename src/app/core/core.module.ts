import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthService } from '../services/auth.service';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { LayoutModule } from '../layout/layout.module';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [NotFoundComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    AngularFireAuthModule,
    LayoutModule,
    MatIconModule,
  ],
  providers: [AuthService],
})
export class CoreModule {}
