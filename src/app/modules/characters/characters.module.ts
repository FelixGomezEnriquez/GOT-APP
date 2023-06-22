import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharacterComponent } from './character/character.component';
import { LayoutModule } from 'src/app/layout/layout.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { SearchBarComponent } from './search-bar/search-bar.component';

@NgModule({
  declarations: [CharacterComponent, SearchBarComponent],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    LayoutModule,
    SharedModule,
    MatInputModule,
  ],
})
export class CharactersModule {}
