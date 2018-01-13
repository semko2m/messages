import {ModuleWithProviders, NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {ProgressbarModule, TypeaheadModule} from 'ngx-bootstrap';

import {MessagesService} from './services/messages.service';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {RouterModule} from '@angular/router';
import {ConsumerComponent} from './components/consumer/consumer.component';
import {PresenterComponent} from './components/presenter/presenter.component';


@NgModule({
  declarations: [
    PageNotFoundComponent,
    ConsumerComponent,
    PresenterComponent
  ],
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    TypeaheadModule.forRoot(),
    ProgressbarModule.forRoot(),
    RouterModule,
  ],
  exports: [
    ConsumerComponent,
  ]
})
export class MessagesModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MessagesModule,
      providers: [MessagesService]
    };
  }
}
