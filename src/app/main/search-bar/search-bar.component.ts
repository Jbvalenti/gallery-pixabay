import { Component, OnInit } from '@angular/core';
import { PixabayService } from 'src/app/services/pixabay.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  public query = "";

  constructor(private _pixabayService: PixabayService) { }

  ngOnInit(): void {
    this.onSearch();
  }

  public onSearch(): void {
    this._pixabayService.getImage(this.query);
  }
}
