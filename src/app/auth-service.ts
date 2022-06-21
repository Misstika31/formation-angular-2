import { Injectable } from '@angular/core';
import { delay, Observable, of, tap } from 'rxjs';

@Injectable()
export class AuthService {
  isLoggedIn: boolean = false;
  redirectUrl: string;
  login(name: string, password: string): Observable<boolean> {
    let isLogged = (name === 'admin' && password === 'admin');

    return of(true).pipe(
      delay(1000),
      tap(() => this.isLoggedIn = isLogged)
    );


  }
  logout() {
    this.isLoggedIn = false;
  }
}
