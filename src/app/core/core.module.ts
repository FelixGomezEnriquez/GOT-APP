import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthService } from '../services/auth.service';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

@NgModule({
  declarations: [NotFoundComponent],
  imports: [CommonModule, CoreRoutingModule, AngularFireAuthModule],
  providers: [AuthService],
})
export class CoreModule {}
