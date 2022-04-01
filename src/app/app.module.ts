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

@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
    CarouselComponent,
    ImageCropComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ImageCropperModule,
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