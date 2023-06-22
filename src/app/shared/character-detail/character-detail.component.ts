import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/interfaces/character';
import { gotService } from 'src/app/services/got.service';
@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss'],
})
export class CharacterDetailComponent {
  private characterId: number = 0;
  public character!: Character;
  constructor(private route: ActivatedRoute, private gS: gotService) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.characterId = params['id'];
      console.log(this.characterId);
    });
    this.gS.getCharacterById(this.characterId).subscribe({
      next: (data: Character) => {
        this.character = data;
      },
      error: (err: any) => {
        console.log('error' + err);
      },
    });
  }
}
