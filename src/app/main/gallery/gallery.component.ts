import { Component, OnInit } from '@angular/core';
import { PixabayService } from 'src/app/services/pixabay.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  public title = 'gallery';

  constructor(private pixabayService: PixabayService) { }

  ngOnInit(): void {
  }
}
