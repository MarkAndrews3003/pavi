import {Injectable} from '@angular/core';
import {API_URL} from '../constants/general';
import {HttpClient} from '@angular/common/http';

// JWT helper
import {JwtHelperService} from '@auth0/angular-jwt';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpClient: HttpClient,
    private jwtHelper: JwtHelperService,
    private router: Router
  ) {
  }

  login(params) {
    return this.httpClient.post(`${API_URL}auth/login`, params);
  }

  /**
   * Checks to see if user logged in/ token expired
   */
  loggedIn() {
    return !this.jwtHelper.isTokenExpired();
  }

  async logOut() {
    localStorage.removeItem('token');
    await this.router.navigate(['/']);
  }

  register(params) {
    return this.httpClient.post(`${API_URL}auth/register`, params);
  }
}
