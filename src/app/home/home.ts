import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../services/auth';
import { LetterboxComponent } from '../letterbox/letterbox';
import { SettingsComponent } from '../settings/settings';
import { WriteLetterComponent } from '../write-letter/write-letter';

@Component({
  selector: 'app-home',
  imports: [
    MatTabsModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    LetterboxComponent,
    SettingsComponent,
    WriteLetterComponent,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  authService = inject(AuthService);
  private router = inject(Router);

  selectedTabIndex = 0;
  showWriteLetter = false;

  openWriteLetter() {
    this.showWriteLetter = true;
  }

  closeWriteLetter() {
    this.showWriteLetter = false;
  }
}
