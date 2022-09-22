import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url='https://reqres.in/api/users';

  constructor(private http: HttpClient) { }

  buscarUsuarios(page: number) {

    return this.http.get(`${this.url}?page=${page}`);

  }}
