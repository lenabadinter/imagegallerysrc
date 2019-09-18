import { Component, OnInit } from '@angular/core';
import { GalleryService } from 'src/app/gallery.service';

@Component({
  selector: 'app-image-meta-data',
  templateUrl: './image-meta-data.component.html',
  styleUrls: ['./image-meta-data.component.scss']
})
export class ImageMetaDataComponent implements OnInit {

  constructor(public galleryService: GalleryService) { }

  ngOnInit() {
  }

}
