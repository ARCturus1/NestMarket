import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { platformWorkerAppDynamic } from '@angular/platform-webworker-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
// platformWorkerAppDynamic().bootstrapModule(AppModule)
//     .catch(err => console.log(err));
