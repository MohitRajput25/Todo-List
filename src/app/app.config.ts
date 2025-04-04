import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { TaskListComponent } from './components/task-list/task-list.component';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([
      { path: '', component: TaskListComponent },
    ])
    ,provideRouter(routes), provideClientHydration(), provideAnimationsAsync()]
};
