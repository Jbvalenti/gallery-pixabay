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
  private imageSource = new BehaviorSubject<PixabayHit[]>([]);

  public imageList = this.imageSource.asObservable();

  constructor(private httpClient: HttpClient) { }

  public getImage(query: string): void {
    this.httpClient.get(this.pixabayBaseUrl + query, {
      responseType: 'json'
    }).subscribe((response: PixabayPayload) => {
      this.imageSource.next(response.hits);
    });
  }
}
