import { Component, OnInit, Input } from '@angular/core';
import { PixabayHit } from 'src/app/interfaces/pixabay-hit';
import { PixabayService } from 'src/app/services/pixabay.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-image-full',
  templateUrl: './image-full.component.html',
  styleUrls: ['./image-full.component.scss'],
  animations: [
    trigger(
      'inOutAnimation',
      [
        transition(
          ':enter',
          [
            style({ opacity: 0 }),
            animate('.25s',
              style({ opacity: 1 }))
          ]
        ),
        transition(
          ':leave',
          [
            style({ opacity: 1 }),
            animate('.25s',
              style({ opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class ImageFullComponent implements OnInit {
  public image: PixabayHit;

  constructor(private pixabayService: PixabayService) { }

  ngOnInit(): void {
    this.pixabayService.imageFocus.subscribe((data: PixabayHit) => {
      this.image = data;
    });
  }

  public onHide(): void {
    this.pixabayService.hideFocusImage();
  }
}
