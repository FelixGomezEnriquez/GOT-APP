import { Router } from '@angular/router';
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
  constructor(private gS: gotService, private router: Router) {}

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

  goToCharacter(character: Character): void {
    this.router.navigate(['character', character.id]);
  }
}
