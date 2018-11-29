import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RedirectorComponent} from './redirector/redirector.component';
import {GalleryModule} from './gallery/gallery.module';
import {GalleryConfig} from './gallery/token';

@NgModule({
  declarations: [
    AppComponent,
    RedirectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GalleryModule,
  ],
  providers: [
    {provide: GalleryConfig, useValue: 'toandz'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
