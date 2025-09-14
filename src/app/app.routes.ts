import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { AboutPagina } from './pages/about-pagina/about-pagina';
import { ProyectosPagina } from './pages/proyectos-pagina/proyectos-pagina';
export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'home',
        component: Home
    },
    {
        path: 'about',
        component: AboutPagina
    },
    {
        path: 'proyectos',
        component: ProyectosPagina
    }
];
