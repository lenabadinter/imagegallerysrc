import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { MatTabsModule } from '@angular/material';
import { GalleryService } from './gallery.service';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ImageListComponent } from './components/image-list/image-list.component';
import { ImageMetaDataComponent } from './components/image-meta-data/image-meta-data.component';


@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    ImageListComponent,
    ImageMetaDataComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ScrollingModule,
    MatTabsModule
  ],
  providers: [GalleryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
