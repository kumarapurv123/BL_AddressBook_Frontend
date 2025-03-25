import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  ...appConfig, // Spread `appConfig` properly
  providers: [...(appConfig.providers || []), provideHttpClient()] // Ensure providers are merged correctly
}).catch(err => console.error(err));
