import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { Photo } from './models/photo';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  photos: Photo[];
  selectedImage: Photo;

  constructor(private http: HttpClient) {
    this.fetchAllImages();
  }

  fetchAllImages()  {
    this.http.get<Photo[]>('https://picsum.photos/v2/list?page=1&limit=150').subscribe(data => {
      this.photos = data;
    });
  }

  setSelectedImage(selectedImage: Photo) {
    this.selectedImage = selectedImage;
    console.log('selected image ' + this.selectedImage.download_url);
  }

}
