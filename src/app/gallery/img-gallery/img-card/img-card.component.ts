import {Component, Input, OnInit} from '@angular/core';
import {ImgGenerateService} from '../../img-generate.service';

@Component({
  selector: 'app-img-card',
  templateUrl: './img-card.component.html',
  styleUrls: ['./img-card.component.css']
})
export class ImgCardComponent implements OnInit {

  @Input() src = '';

  constructor() {
  }

  ngOnInit() {
  }

}


