import { Component, Input } from '@angular/core';
import { Character } from 'src/app/interfaces/character';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.sass'],
})
export class CharacterCardComponent {
  @Input()
  public character!: Character;
  public image!: string;

  constructor() {}

  ngOnInit(): void {}
}
