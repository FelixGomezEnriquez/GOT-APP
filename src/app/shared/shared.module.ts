import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { SharedRoutingModule } from './shared-routing.module';
import { CharacterCardComponent } from './character-card/character-card.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { SuggestFormComponent } from './suggest-form/suggest-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CharacterCardComponent,
    CharacterDetailComponent,
    SuggestFormComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatSnackBarModule,
  ],
  exports: [
    CharacterCardComponent,
    CharacterDetailComponent,
    SuggestFormComponent,
  ],
})
export class SharedModule {}
