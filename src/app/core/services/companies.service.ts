import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_URL} from '../constants/general';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  register(params) {
    return this.httpClient.post(`${API_URL}companies/register`, params);
  }
}
