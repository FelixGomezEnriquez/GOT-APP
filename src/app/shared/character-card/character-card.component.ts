import { Component, Input } from '@angular/core';
import { Character } from 'src/app/interfaces/character';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss'],
})
export class CharacterCardComponent {
  @Input()
  public character!: Character;
  public image!: string;

  // AÑADIR EN FUTURAS ACTUALIZACIONES UN ICONO POR CADA CASA EN LA CARD
  // public FAM:{}={
  //   Lannister:"House Lannister",
  //   Targaryen:"House Targaryen",
  //   Tarly:"House Tarly",
  //   Stark:"House Stark",
  //   Baratheon:"House Baratheon",
  //   Greyjoy: "House Greyjoy",
  //   Clegane: "House Clegane",
  //   Baelish: "House Baelish",
  //   Seaworth: "House Seaworth",
  //   Tyrrel:"House Tyrrel",
  //   Tarth: "Tarth",
  //   Naathi:"Naathi",
  //   none:"none",
  //   Bolton:"Bolton"
  // }
  constructor() {}

  ngOnInit(): void {}
}
