import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../services/auth';

@Component({
  selector: 'app-settings',
  imports: [MatCardModule, MatButtonModule, MatDialogModule, MatIconModule],
  templateUrl: './settings.html',
  styleUrl: './settings.scss',
  standalone: true,
})
export class SettingsComponent {
  authService = inject(AuthService);
  private router = inject(Router);
  private dialog = inject(MatDialog);

  openLogoutDialog() {
    const dialogRef = this.dialog.open(LogoutConfirmDialog);

    dialogRef.afterClosed().subscribe(async (result) => {
      if (result === true) {
        await this.authService.logout();
        this.router.navigate(['/login']);
      }
    });
  }
}

@Component({
  selector: 'logout-confirm-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  template: `
    <h2 mat-dialog-title>Confirm Logout</h2>
    <mat-dialog-content>
      <p>Are you sure you want to log out?</p>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button [mat-dialog-close]="false">Cancel</button>
      <button mat-raised-button color="warn" [mat-dialog-close]="true">Logout</button>
    </mat-dialog-actions>
  `,
  styles: [
    `
      mat-dialog-content {
        padding: 20px 0;
      }
      mat-dialog-actions {
        padding: 8px 0;
        gap: 8px;
      }
    `,
  ],
})
export class LogoutConfirmDialog {}
