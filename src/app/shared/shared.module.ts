import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { SharedRoutingModule } from './shared-routing.module';
import { CharacterCardComponent } from './character-card/character-card.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';

@NgModule({
  declarations: [CharacterCardComponent, CharacterDetailComponent],
  imports: [CommonModule, SharedRoutingModule, MatCardModule, MatButtonModule],
  exports: [CharacterCardComponent, CharacterDetailComponent],
})
export class SharedModule {}
