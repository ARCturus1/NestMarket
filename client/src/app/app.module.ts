import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AppMaterialModule } from './material/material.module';
import { RootMenuComponent } from './views/root-menu/root-menu.component';
import { HelloMessageComponent } from './views/hello-message/hello-message.component';

@NgModule({
    declarations: [
        AppComponent,
        RootMenuComponent,
        HelloMessageComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppMaterialModule,
        ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
