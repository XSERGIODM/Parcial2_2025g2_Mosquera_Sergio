import { Component } from '@angular/core';
import {ServicioComponente} from '../../components/servicio-componente/servicio-componente';
import {FormularioComponente} from '../../components/formulario-componente/formulario-componente';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ServicioComponente, FormularioComponente],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  scrollToContact() {
    const contactElement = document.getElementById('contacto');
    if (contactElement) {
      contactElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

}
