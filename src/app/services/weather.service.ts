import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' // request Http

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey = '99b0803a97a89d0dc25ec485c2e968be'
  URI: string = "";

  constructor(private httpClient: HttpClient) { // instancia - modulo
    this.URI = `https://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&units=metric&q=`;
  }

  getWeather(cityName: string, countryCode: string) {
    return this.httpClient.get(`${this.URI}${cityName},${countryCode}`);
  }
}
