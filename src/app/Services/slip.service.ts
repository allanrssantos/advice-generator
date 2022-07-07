import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Slip } from '../models/models';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SlipService {
  private api: string = 'https://api.adviceslip.com';

  constructor(private http: HttpClient) {}
  getSlip(): Observable<Slip> {
    return this.http.get<Slip>(`${this.api}/advice`);

  }
}
