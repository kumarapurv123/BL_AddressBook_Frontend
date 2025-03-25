import { Component } from '@angular/core';
import { UserInfoDto } from '../../services/models';
import { FormsModule } from '@angular/forms';
import { NgFor,NgIf } from '@angular/common';
import { AuthenticationService } from '../../services/services';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  imports: [FormsModule,NgFor,NgIf],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registerRequest : UserInfoDto = { username: '', password: '', email: '' };
  errorMsg: string[] = [];

  constructor(
    private router: Router,
    private authService :AuthenticationService
  ) {}

  
  register(): void {
    this.errorMsg = [];
    this.authService.signUp(
      {body:this.registerRequest})
      .subscribe({
        next: () => {
          this.router.navigate(['/login']);
        },
        error: (error) => {
          this.errorMsg.push(error.error.message);
        }
      });
  }

  login(): void {
    // Navigate to login page
    this.router.navigate(['/login']);
  }


}
