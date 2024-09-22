import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


const urlBase = 'https://api.openweathermap.org/data/2.5/weather';
const appId = '66dde1f9d736b06d31ff0c7b1bc950a2';

@Injectable({
  providedIn: 'root'
})
export class TemperaturaService {

  constructor(private http: HttpClient) { }

  getEstadoTiempo(ciudad: string){
    const url = `${urlBase}?q=${ciudad}&appid=${appId}`;
    return this.http.get(url);
  }
}
