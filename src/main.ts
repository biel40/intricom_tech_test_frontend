import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/components/main/app.component';
import { appConfig } from './app/components/main/app.config';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
