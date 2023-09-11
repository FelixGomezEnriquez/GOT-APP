import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

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
    FormsModule,
    MatExpansionModule,
    MatIconModule,
  ],
})
export class CharactersModule {}
