import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {ImgGalleryComponent} from './img-gallery/img-gallery.component';
import {ImgCardComponent} from './img-gallery/img-card/img-card.component';
import {ImgGenerateService} from './img-generate.service';
import { ImgSliderComponent } from './img-slider/img-slider.component';
import { SlideComponent } from './img-slider/slide/slide.component';

@NgModule({
  declarations: [ImgGalleryComponent, ImgCardComponent, ImgSliderComponent, SlideComponent],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [ImgGalleryComponent],
  providers: [ImgGenerateService]
})

export class GalleryModule {
}
