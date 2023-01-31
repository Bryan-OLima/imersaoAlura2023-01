import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private _apiUrl = 'https://economia.awesomeapi.com.br/';
  private _dollar = 'json/last/USD';

  constructor(
    public http: HttpClient
  ) { }

  getDollarValue() {
    return this.http.get<any>(`${this._apiUrl}${this._dollar}`);
  }
}
