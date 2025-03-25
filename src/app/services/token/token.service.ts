// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class TokenService {
//   set token(token: string) {
//     localStorage.setItem('token', token);
//   }
//   get token() {
//     return localStorage.getItem('token') as string;
//   }


// }


import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  set accessToken(token: string) {
    localStorage.setItem('accessToken', token);
  }

  get accessToken(): string | null {
    return localStorage.getItem('accessToken');
  }

  set refreshToken(token: string) {
    localStorage.setItem('refreshToken', token);
  }

  get refreshToken(): string | null {
    return localStorage.getItem('refreshToken');
  }

  
}
