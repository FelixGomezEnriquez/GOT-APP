import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

import { SharedRoutingModule } from './shared-routing.module';
import { CharacterCardComponent } from './character-card/character-card.component';

@NgModule({
  declarations: [CharacterCardComponent],
  imports: [CommonModule, SharedRoutingModule, MatCardModule],
  exports: [CharacterCardComponent],
})
export class SharedModule {}
