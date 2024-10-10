import { Component, Input } from '@angular/core';
import { Character } from '../../models/models';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-character-card',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.scss',
})
export class CharacterCardComponent {
  @Input() character!: Character;
}
