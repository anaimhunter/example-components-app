import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';
import { DataTableComponent } from './data-table/data-table.component';
import { CarouselComponent } from './carousel/carousel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImageCropperModule } from 'ngx-image-cropper';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ImageCropComponent } from './image-crop/image-crop.component';
import { QrCodeComponent } from './qr-code/qr-code.component';
import { QRCodeModule } from 'angularx-qrcode';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MultipleImageUploadComponent } from './multiple-image-upload/multiple-image-upload.component';
import { DataTableCsvComponent } from './data-table-csv/data-table-csv.component';

@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
    CarouselComponent,
    ImageCropComponent,
    QrCodeComponent,
    MultipleImageUploadComponent,
    DataTableCsvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ImageCropperModule,
    QRCodeModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    DataTableComponent,
    CarouselComponent
  ]
})
export class AppModule { }
