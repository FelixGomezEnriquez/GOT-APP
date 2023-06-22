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
  public charactersOriginal: Character[] = [];

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

    //Añadimos los character a charOriginal que servira para acceder a todos siempre
    this.charactersOriginal = this.characters;
  }

  onSearch(query: string) {
    console.log(this.characters);
    let filtrados = this.charactersOriginal.filter((character) => {
      return character.fullName.toLowerCase().includes(query.toLowerCase());
    });

    this.characters = filtrados;
    console.log(filtrados);
    // Realiza la lógica de búsqueda y asigna los resultados a la propiedad 'characters'
  }
}
