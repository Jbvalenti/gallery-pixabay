import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { PixabayPayload } from 'src/app/interfaces/pixabay-payload';
import { PixabayHit } from '../interfaces/pixabay-hit';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PixabayService {
  private pixabayBaseUrl = environment.pixabay.url + '?key=' + environment.pixabay.token + '&q=';
  private imageListSource = new BehaviorSubject<PixabayHit[]>([]);
  private imageFocusSource = new BehaviorSubject<PixabayHit>(null);

  public imageList = this.imageListSource.asObservable();
  public imageFocus = this.imageFocusSource.asObservable();

  constructor(private httpClient: HttpClient) { }

  public getImage(query: string): void {
    this.httpClient.get(this.pixabayBaseUrl + query, {
      responseType: 'json'
    }).subscribe((response: PixabayPayload) => {
      this.imageListSource.next(response.hits);
    });
  }

  public setFocusImage(image: PixabayHit): void {
    this.imageFocusSource.next(image);
  }

  public hideFocusImage(): void {
    this.imageFocusSource.next(null);
  }
}
