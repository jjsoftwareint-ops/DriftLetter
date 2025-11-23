import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-letterbox',
  imports: [MatCardModule],
  templateUrl: './letterbox.html',
  styleUrl: './letterbox.scss',
  standalone: true,
})
export class LetterboxComponent {}
