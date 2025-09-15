import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormularioServicio } from '../../services/formulario-servicio';

@Component({
  selector: 'app-formulario-componente',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario-componente.html',
  styleUrls: ['./formulario-componente.css']
})
export class FormularioComponente {
  private formularioServicio = inject(FormularioServicio);
  
  formData = {
    Nombre: '',
    Correo: '',
    Asunto: '',
    Mensaje: ''
  };
  
  mensajeExito: string = '';
  mensajeError: string = '';
  enviando: boolean = false;

  constructor() {}

  onSubmit() {
    this.enviando = true;
    this.mensajeExito = '';
    this.mensajeError = '';

    this.formularioServicio.enviarFormulario(this.formData).subscribe({
      next: (response) => {
        this.mensajeExito = '¡Mensaje enviado con éxito!';
        this.formData = { 
          Nombre: '', 
          Correo: '', 
          Asunto: '', 
          Mensaje: '' 
        };
      },
      error: (error) => {
        console.error('Error al enviar el formulario:', error);
        this.mensajeError = 'Ocurrió un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.';
      },
      complete: () => {
        this.enviando = false;
      }
    });
  }
}
