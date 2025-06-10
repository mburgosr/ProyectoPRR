import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { routes } from './app/app.routes'; // Asegúrate que esta ruta sea exacta
import { provideRouter } from '@angular/router';

bootstrapApplication(App, {
  providers: [provideRouter(routes)]
}).catch(err => console.error(err));
