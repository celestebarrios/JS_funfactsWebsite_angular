import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CallbacksComponent } from './callbacks/callbacks.component';
import { MapComponent } from './map/map.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { PromisesComponent } from './promises/promises.component';
import { CreatorComponent } from './creator/creator.component';


@NgModule({
  declarations: [
    AppComponent,
    CallbacksComponent,
    MapComponent,
    JavascriptComponent,
    PromisesComponent,
    CreatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
