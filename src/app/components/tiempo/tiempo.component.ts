import { Component } from '@angular/core';
import { TemperaturaService } from '../../services/temperatura.service';

@Component({
  selector: 'app-tiempo',
  templateUrl: './tiempo.component.html',
  styleUrls: ['./tiempo.component.css']
})
export class TiempoComponent {
  isFormVisible = false;

  toggleForm() {
    this.isFormVisible = !this.isFormVisible;
  }

  ciudad: string = 'bogota';

  tiempo: any;
  name: any;
  temperatura: any;
  humedad: any;
  latitud: any;
  longitud: any;
  descripcion: any;

  constructor(private _tiempo: TemperaturaService) { }

  consultar() {
    this._tiempo.getEstadoTiempo(this.ciudad).subscribe(
      respuesta => {
        this.tiempo = respuesta;
        this.name = this.tiempo.name;
        this.temperatura = this.tiempo.main.temp;
        this.humedad = this.tiempo.main.humidity;
        this.latitud = this.tiempo.coord.lat;
        this.longitud = this.tiempo.coord.lon;
        this.descripcion = this.tiempo.weather[0].description;

        console.log("respuesta: ", respuesta);
      });
  }

}
