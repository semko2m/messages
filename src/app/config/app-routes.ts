import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ConsumerComponent} from "../modules/messages/components/consumer/consumer.component";
import {PageNotFoundComponent} from '../modules/messages/components/page-not-found/page-not-found.component';

export const AppRoutes: Routes = [
  {path: '', redirectTo: 'consumer', pathMatch: 'full'},
  {path: 'consumer', component: ConsumerComponent},
  {path: '**', component: PageNotFoundComponent}
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(AppRoutes, {enableTracing: false});
