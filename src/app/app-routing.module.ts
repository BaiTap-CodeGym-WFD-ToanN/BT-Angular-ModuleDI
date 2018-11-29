import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ImgGalleryComponent} from './gallery/img-gallery/img-gallery.component';
import {ImgSliderComponent} from './gallery/img-slider/img-slider.component';
import {RedirectorComponent} from './redirector/redirector.component';

const routes: Routes = [
  {path: '', component: RedirectorComponent},
  {path: 'gallery', component: ImgGalleryComponent},
  {path: 'slider', component: ImgSliderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
