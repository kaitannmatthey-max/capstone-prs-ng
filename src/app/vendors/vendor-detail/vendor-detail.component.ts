import { Component } from '@angular/core';

@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent {
  pageTitle: string = "Vendor Detail"
  vendor: any = {
    "id": 0,
    "code": "KR",
    "name": "Kroger",
    "address": "1014 Vine St",
    "city": "Cincinnati",
    "state": "OH",
    "zip": "45202",
    "phone": "1-800-576-4377",
    "email": "contact@kroger.com"
  }
}
