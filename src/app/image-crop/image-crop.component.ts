import { Component, OnInit } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-image-crop',
  templateUrl: './image-crop.component.html',
  styleUrls: ['./image-crop.component.css']
})
export class ImageCropComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  imgChangeEvt: any = '';
  cropImgPreview: any = '';

  onFileChange(event: any): void {
      this.imgChangeEvt = event;
  }
  cropImg(e: ImageCroppedEvent) {
      this.cropImgPreview = e.base64;
  }

  imgLoad() {
      // display cropper tool
  }

  initCropper() {
      // init cropper
  }
   
  imgFailed() {
      // error msg
  }  

}
