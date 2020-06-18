import { Component, OnInit } from '@angular/core';
import { PixabayService } from 'src/app/services/pixabay.service';
import { PixabayHit } from 'src/app/interfaces/pixabay-hit';

@Component({
  selector: 'app-image-grid',
  templateUrl: './image-grid.component.html',
  styleUrls: ['./image-grid.component.scss']
})
export class ImageGridComponent implements OnInit {
  public imageList: PixabayHit[];

  constructor(private pixabayService: PixabayService) { }

  ngOnInit(): void {
    this.pixabayService.imageList.subscribe((data: PixabayHit[]) => {
      this.imageList = data;
    });
  }

}
