import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.css']
})
export class QrCodeComponent implements OnInit {

  public QrCode: string = '';
   
  constructor () {
    this.QrCode = 'facebook.com';
  }

  ngOnInit(): void {
  }

}
