import { Character } from 'src/app/interfaces/character';
import { gotService } from './../../../services/got.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.sass'],
})
export class CharacterComponent {
  public characters: Character[] = [];

  constructor(private gS: gotService) {}

  ngOnInit(): void {
    this.gS.getAllCharacters().subscribe({
      next: (data: any) => {
        data.forEach((element: any) => {
          this.characters.push(element);
        });
      },
      error: (error) => {
        console.log('ERO ERROR: ' + error);
      },
    });
  }
}
