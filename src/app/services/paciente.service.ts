import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  private API_SERVER = "http://localhost:8080/pacientes";

  constructor(private http: HttpClient) { }

  // Obtener todos los pacientes
  public getAll(): Observable<any>{
    return this.http.get(this.API_SERVER);
  }

  // Crear un nuevo paciente
  public crearPacientes(paciente: any): Observable<any> {
    return this.http.post(this.API_SERVER, paciente);
  }

  // eliminar paciente
  public eliminarPaciente(id: any): Observable<void> {
    return this.http.delete<void>(this.API_SERVER+`/${id}`);
  }

  // editar paciente
  // public getEditarPaciente(id: string): Observable<any>{
  //   return this.http.get(this.API_SERVER+`/${id}`);
  // }
}
