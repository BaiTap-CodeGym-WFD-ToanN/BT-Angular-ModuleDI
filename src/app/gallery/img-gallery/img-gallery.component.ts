import {Component, Inject, Injectable, OnInit, Optional} from '@angular/core';
import {ImgGenerateService} from '../img-generate.service';
import {GalleryConfig} from '../token';

@Component({
  selector: 'app-img-gallery',
  templateUrl: './img-gallery.component.html',
  styleUrls: ['./img-gallery.component.css']
})
export class ImgGalleryComponent implements OnInit {
  images = this.imgGenerateService.autoIncrementLinkGenerator(4);

  itemsWidth: number;
  config: number;

  constructor(@Inject(GalleryConfig)
              @Optional() config: number,
              private imgGenerateService: ImgGenerateService
  ) {
    if (config) {
      this.config = config;
    }
  }

  ngOnInit() {
    this.itemsWidth = 100 / this.config;
  }

}
