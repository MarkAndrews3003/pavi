import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_URL} from '../constants/general';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  addWorkExperience(params) {
    return this.httpClient.post(`${API_URL}cv/work`, params);
  }

  updateWorkExperience(params) {
    return this.httpClient.put(`${API_URL}cv/work_update`, params);
  }

  getWorkExperience(params) {
    return this.httpClient.get(`${API_URL}cv/work_get`, {params});
  }

  removeWorkExperience(params) {
    return this.httpClient.delete(`${API_URL}cv/work_delete`, {params});
  }

  addEducation(params) {
    return this.httpClient.post(`${API_URL}cv/education`, params);
  }


}
