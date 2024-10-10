import { Component, inject } from '@angular/core';
import { Character } from '../../models/models';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { firstValueFrom } from 'rxjs';
import { ThemeToggleComponent } from '../../components/theme-toggle/theme-toggle.component';

@Component({
  selector: 'app-character-details',
  standalone: true,
  imports: [ThemeToggleComponent],
  templateUrl: './character-details.component.html',
  styleUrl: './character-details.component.scss',
})
export class CharacterDetailsComponent {
  character: Character | undefined;

  private route = inject(ActivatedRoute);
  private http = inject(HttpService);

  constructor() {}

  ngOnInit(): void {
    const characterId = this.route.snapshot.paramMap.get('id');
    this.character = history.state?.character;
    if (characterId) {
      this.loadCharacter(characterId);
    }
  }

  private async loadCharacter(id: string): Promise<void> {
    try {
      const response = await firstValueFrom(
        this.http.getData<Character>(`character/${id}`)
      );
      this.character = response;
    } catch (error) {
      console.error(error);
    }
  }

  goBack(): void {
    window.history.back();
  }
}
