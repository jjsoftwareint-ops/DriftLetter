import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../services/auth';

@Component({
  selector: 'app-login',
  imports: [MatButtonModule, MatCardModule, MatIconModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  private authService = inject(AuthService);
  private router = inject(Router);

  isLoading = false;

  async loginWithGoogle() {
    this.isLoading = true;
    try {
      const user = await this.authService.loginWithGoogle();
      console.log('Login successful:', user);
      await this.router.navigate(['/home']);
      this.isLoading = false;
    } catch (error: any) {
      console.error('Login failed:', error);
      const errorMessage = error?.code ? `Error: ${error.code}` : 'Login failed. Please try again.';
      alert(errorMessage);
      this.isLoading = false;
    }
  }
}
