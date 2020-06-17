import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JavascriptComponent } from './javascript/javascript.component';
import { PromisesComponent } from './promises/promises.component';
import { CallbacksComponent } from './callbacks/callbacks.component';
import { MapComponent } from './map/map.component';
import { CreatorComponent } from './creator/creator.component';


const routes: Routes = [
  {
    path : 'javascript', component : JavascriptComponent},
  {
    path : 'promises', component : PromisesComponent},
  {
    path : 'callbacks', component : CallbacksComponent},
  {
    path : 'map', component : MapComponent},
  {
    path : 'creator', component : CreatorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
