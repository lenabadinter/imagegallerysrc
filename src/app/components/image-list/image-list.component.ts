import { Component, OnInit } from '@angular/core';
import { GalleryService } from 'src/app/gallery.service';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss']
})
export class ImageListComponent implements OnInit {

  constructor(public galleryService: GalleryService) { }

  ngOnInit() {
  }

  mouseHover(e) {
    console.log('hovered', e);
  }

}
