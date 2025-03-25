// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { AuthRequestDto } from '../../services/models/auth-request-dto';
// import { NgIf, NgFor } from '@angular/common';
// import { Router } from '@angular/router';
// import { TokenControllerService } from '../../services/services/token-controller.service';
// import { TokenService } from '../../services/token/token.service';

// import { catchError, tap } from 'rxjs/operators';
// import { of } from 'rxjs';

// @Component({
//   selector: 'app-login',
//   standalone: true,
//   imports: [FormsModule, NgIf, NgFor],
//   templateUrl: './login.component.html',
//   styleUrl: './login.component.scss'
// })
// export class LoginComponent {
//   authRequest: AuthRequestDto = {
//     username: '',
//     password: ''
//   };

//   errorMsg: string[] = [];

//   constructor(
//     private router: Router,
//     private authService: TokenControllerService,
//     private tokenService: TokenService
//   ) {}

//   login(): void {
//     this.errorMsg = [];

//     if (!this.authRequest.username) {
//       this.errorMsg.push('Username is required');
//     }
//     if (!this.authRequest.password) {
//       this.errorMsg.push('Password is required');
//     }
//     if (this.errorMsg.length) {
//       return;
//     }

//     const loginParams = {
//       body: this.authRequest // Ensure it matches AuthenticateAndGetToken$Params structure
//     };

//     this.authService.authenticateAndGetToken(loginParams)
//       .pipe(
//         tap((response: any) => {  // Ensure response type is correct
//           console.log('Login successful:', response);

//           if (response && response.accessToken) {  // Ensure response contains accessToken
//             this.tokenService.token = response.accessToken;
//             // this.router.navigate(['/contacts']);
//           } else {
//             this.errorMsg = ['Invalid token response'];
//           }
//         }),
//         catchError((error) => {
//           this.errorMsg = error.error?.message ? [error.error.message] : ['Login & Password are incorrect'];
//           console.error('Login error:', error);
//           return of(null); // Return a safe fallback value
//         })
//       )
//       .subscribe();
//   }

//   register(): void {
//     this.router.navigate(['/register']);
//   }
// }


// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { AuthRequestDto } from '../../services/models/auth-request-dto';
// import { NgIf, NgFor } from '@angular/common';
// import { Router } from '@angular/router';
// import { TokenControllerService } from '../../services/services/token-controller.service';
// import { TokenService } from '../../services/token/token.service';
// import { JwtResponseDto } from '../../services/models/jwt-response-dto';

// import { catchError, tap } from 'rxjs/operators';
// import { of } from 'rxjs';

// @Component({
//   selector: 'app-login',
//   standalone: true,
//   imports: [FormsModule, NgIf, NgFor],
//   templateUrl: './login.component.html',
//   styleUrl: './login.component.scss'
// })
// export class LoginComponent {
//   authRequest: AuthRequestDto = {
//     username: '',
//     password: ''
//   };

//   errorMsg: string[] = [];

//   constructor(
//     private router: Router,
//     private authService: TokenControllerService,
//     private tokenService: TokenService
//   ) {}

//   login(): void {
//     this.errorMsg = [];

//     if (!this.authRequest.username) {
//       this.errorMsg.push('Username is required');
//     }
//     if (!this.authRequest.password) {
//       this.errorMsg.push('Password is required');
//     }
//     if (this.errorMsg.length) {
//       return;
//     }

//     const loginParams = {
//       body: this.authRequest
//     };

//     this.authService.authenticateAndGetToken(loginParams)
//       .pipe(
//         tap((response: any) => {
//           console.log('Login successful:', response);

//           if (response?.accessToken && response?.token) {
//             this.tokenService.accessToken = response.accessToken;
//             this.tokenService.refreshToken = response.token;
//             this.router.navigate(['/dashboard']); // Redirect to dashboard
//           } else {
//             this.errorMsg.push('Invalid token response');
//           }
//         }),
//         catchError((error) => {
//           const message = error.error?.message || 'Invalid username or password';
//           this.errorMsg.push(message);
//           console.error('Login error:', error);
//           return of(null);
//         })
//       )
//       .subscribe();
//   }

//   register(): void {
//     this.router.navigate(['/register']);
//   }
// }


import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthRequestDto } from '../../services/models/auth-request-dto';
import { Router } from '@angular/router';
import { TokenControllerService } from '../../services/services/token-controller.service';
import { TokenService } from '../../services/token/token.service';

import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, NgIf, NgFor],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent  {
  authRequest: AuthRequestDto = { username: '', password: '' };
  errorMsg: string[] = [];

  constructor(
    private router: Router,
    private authService: TokenControllerService,
    private tokenService: TokenService,
  ) {}

  

  login(): void {
    this.errorMsg = [];

    if (!this.authRequest.username) {
      this.errorMsg.push('Username is required');
    }
    if (!this.authRequest.password) {
      this.errorMsg.push('Password is required');
    }
    if (this.errorMsg.length) return;

    

   


    const loginParams = {
      body: this.authRequest
    };
    
    // this.authService.authenticateAndGetToken(loginParams).subscribe({
    //   next: (response: any) => {
    //     console.log('API Response:', response);
    //     this.tokenService.accessToken = response.accessToken || '';
    //     this.tokenService.refreshToken = response.token || '';
    //   },
      
    //   error: (error) => {
    //     const message = error.error?.message || 'Invalid username or password';
    //     this.errorMsg.push(message);
    //     console.error('Login error:', error);
    //   }
    // });

    this.authService.authenticateAndGetToken(loginParams).subscribe({
      next: async (response: any) => {
        if (response instanceof Blob) {
          const jsonResponse = await response.text();
          const parsedResponse = JSON.parse(jsonResponse);
    
          console.log('Parsed Response:', parsedResponse);
    
          this.tokenService.accessToken = parsedResponse.accessToken || '';
          this.tokenService.refreshToken = parsedResponse.token || '';

          this.router.navigate(['address-book']);
        } else {
          console.error('Unexpected response format:', response);
        }
      },
      error: (error) => {
        const message = error.error?.message || 'Invalid username or password';
        this.errorMsg.push(message);
        console.error('Login error:', error);
      }
    });
    
    

  }

  register(): void {
    this.router.navigate(['/register']);
  }
}
