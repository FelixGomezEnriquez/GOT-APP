import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class gotService {
  constructor(private http: HttpClient) {}

  allCharacters(): Observable<any> {
    return this.http.get('https://thronesapi.com/api/v2/Characters');
  }
}
