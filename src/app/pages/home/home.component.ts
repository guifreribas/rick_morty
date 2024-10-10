import { Component, inject, Renderer2, signal } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { firstValueFrom } from 'rxjs';
import { Character, GetCharactersResponse } from '../../models/models';
import { CharacterCardComponent } from '../../components/character-card/character-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CharacterCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  title = 'rick_morty';
  characters = signal<Character[]>([]);

  private http = inject(HttpService);

  constructor() {}

  ngOnInit(): void {
    this.getCharacters();
  }

  private async getCharacters(): Promise<GetCharactersResponse> {
    try {
      const response = await firstValueFrom(this.http.getData('character'));
      console.log({ response });
      this.characters.set(response.results);
      return response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
