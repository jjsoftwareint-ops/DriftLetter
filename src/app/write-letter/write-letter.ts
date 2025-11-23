import { Component, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-write-letter',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, FormsModule],
  templateUrl: './write-letter.html',
  styleUrl: './write-letter.scss',
})
export class WriteLetterComponent {
  close = output<void>();
  letterContent = '';

  onClose() {
    this.close.emit();
  }

  sendLetter() {
    // TODO: Implement send letter logic
    console.log('Sending letter:', this.letterContent);
    this.close.emit();
  }
}
