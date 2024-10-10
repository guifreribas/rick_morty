import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CharacterDetailsComponent } from './pages/character-details/character-details.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'character/:id', component: CharacterDetailsComponent },
  { path: '**', redirectTo: 'HomeComponent' },
];
