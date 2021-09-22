import { Component } from '@angular/core';
import { UserPreferencesService } from '../employee/userPreferences';

@Component({
  templateUrl: './home.component.html',
})
export class HomeComponent {
  
  constructor(private userPreferencesService: UserPreferencesService) {

  }

  get colour(): string {
    return this.userPreferencesService.colourPreference;
  }

  set colour(colour: string) {
    this.userPreferencesService.colourPreference = colour;
  }
}
