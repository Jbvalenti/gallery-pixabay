import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalleryComponent } from './main/gallery/gallery.component';
import { SearchBarComponent } from './main/search-bar/search-bar.component';
import { ImageGridComponent } from './main/image-grid/image-grid.component';
import { HttpClientModule } from '@angular/common/http';
import { ImageThumbComponent } from './main/image-thumb/image-thumb.component';
import { ImageFullComponent } from './main/image-full/image-full.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    ImageThumbComponent,
    SearchBarComponent,
    ImageGridComponent,
    ImageFullComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
