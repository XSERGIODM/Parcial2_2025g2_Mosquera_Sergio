import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormularioServicio {
  private webhookUrl = 'https://dmind-n8n.b0falx.easypanel.host/webhook/724546c8-fb8e-49b9-94d3-bb5b97f0f90c';

  constructor(private http: HttpClient) {}

  enviarFormulario(datos: { Nombre: string; Correo: string; Asunto: string; Mensaje: string }): Observable<any> {
    return this.http.post(this.webhookUrl, datos);
  }
}

