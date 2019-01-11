import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {UserModel} from '../models/user.model';

@Injectable()
export class AuthService {

  private isAuthenticated = false;

  constructor(
      public http: HttpClient
  ) {
  }

  login() {
    this.isAuthenticated = true;
  }

  logout() {
    this.isAuthenticated = false;
    window.localStorage.clear();
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  getUserByEmail(email: string): Observable<any> {
    return this.http.get(`http://localhost:3004/users?email=${email}`)
        .pipe(
            map(response => {
              return response;
            }),
            map((user: UserModel) => user[0] ? user[0] : undefined)
        );
  }

}
