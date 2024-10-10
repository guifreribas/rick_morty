import { Component, HostListener, inject, signal } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { debounceTime, distinctUntilChanged, firstValueFrom } from 'rxjs';
import { Character, GetCharactersResponse } from '../../models/models';
import { CharacterCardComponent } from '../../components/character-card/character-card.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule, CharacterCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  characters = signal<Character[]>([]);
  page: number = 1;
  isLoading = signal<boolean>(false);
  hasMoreCharacters = signal<boolean>(true);
  searchControl = new FormControl('');

  private http = inject(HttpService);

  constructor() {}

  ngOnInit(): void {
    this.getCharacters();

    this.searchControl.valueChanges
      .pipe(debounceTime(200), distinctUntilChanged())
      .subscribe((value) => {
        this.onSearch();
      });
  }

  private async getCharacters(): Promise<void> {
    if (this.isLoading()) return;
    this.isLoading.set(true);
    try {
      const params: any = { page: this.page };
      if (this.searchControl.value) params.name = this.searchControl.value;

      const { results, info } = await firstValueFrom(
        this.http.getData<GetCharactersResponse>('character', { ...params })
      );

      if (!info.next) this.hasMoreCharacters.set(false);
      if (this.page === 1) {
        this.characters.set(results);
      } else {
        this.characters.update((characters) => [...characters, ...results]);
      }

      this.page++;
    } catch (error) {
      console.error(error);
      throw error;
    } finally {
      this.isLoading.set(false);
    }
  }

  onSearch(): void {
    this.page = 1;
    this.characters.set([]);
    this.hasMoreCharacters.set(true);
    this.getCharacters();
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
