import { Component, OnInit, Input } from '@angular/core';
import { PixabayHit } from 'src/app/interfaces/pixabay-hit';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
  @Input() image: PixabayHit;

  constructor() { }

  ngOnInit(): void {
  }

}
