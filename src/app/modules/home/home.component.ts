import { gotService } from './../../services/got.service';
import { Character } from './../../interfaces/character.d';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  characters: Character[] = [];
  images: string[] = [];
  constructor(private gS: gotService) {}

  ngOnInit(): void {
    this.gS.allCharacters().subscribe({
      next: (data: any) => {
        data.forEach((element: any) => {
          this.characters.push(element);
          this.images.push(element.imageUrl);
        });
      },
      error: (error) => {
        console.log('ERO ERROR: ' + error);
      },
    });
    console.log(this.images);
  }
}
