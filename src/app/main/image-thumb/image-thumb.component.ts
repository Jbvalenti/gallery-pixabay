import { Component, OnInit, Input } from '@angular/core';
import { PixabayHit } from 'src/app/interfaces/pixabay-hit';
import { PixabayService } from 'src/app/services/pixabay.service';

@Component({
  selector: 'app-image-thumb',
  templateUrl: './image-thumb.component.html',
  styleUrls: ['./image-thumb.component.scss']
})
export class ImageThumbComponent implements OnInit {
  @Input() image: PixabayHit;

  constructor(private pixabayService: PixabayService) { }

  ngOnInit(): void {
  }

  public onFocus(): void {
    this.pixabayService.setFocusImage(this.image);
  }
}
