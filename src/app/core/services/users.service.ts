import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_URL} from '../constants/general';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  uploadProfileImg(params) {
    return this.httpClient.post(`${API_URL}users/upload/avatar`, params);
  }

  uploadCoverImg(params) {
    return this.httpClient.post(`${API_URL}users/upload/cover`, params);
  }
}
