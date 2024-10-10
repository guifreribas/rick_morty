import { Component, Host, HostListener, inject, signal } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { firstValueFrom, Observable } from 'rxjs';
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
  page: number = 1;
  isLoading = signal<boolean>(false);
  hasMoreCharacters = signal<boolean>(true);

  private http = inject(HttpService);

  constructor() {}

  ngOnInit(): void {
    this.getCharacters();
  }

  private async getCharacters(): Promise<void> {
    if (this.isLoading()) return;
    this.isLoading.set(true);
    try {
      const response = await firstValueFrom(
        this.http.getData<GetCharactersResponse>('character', {
          page: this.page,
        })
      );
      console.log({ response });
      if (!response.info.next) this.hasMoreCharacters.set(false);
      this.characters.update((characters) => [
        ...characters,
        ...response.results,
      ]);
      this.page++;
    } catch (error) {
      console.error(error);
      throw error;
    } finally {
      this.isLoading.set(false);
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    const threshold = 300;
    const position = window.innerHeight + window.scrollY;
    const maxScroll = document.documentElement.scrollHeight;

    if (
      position >= maxScroll - threshold &&
      !this.isLoading() &&
      this.hasMoreCharacters()
    ) {
      this.getCharacters();
    }
  }
}
