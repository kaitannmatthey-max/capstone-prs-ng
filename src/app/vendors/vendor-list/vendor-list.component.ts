import { Component } from '@angular/core';
import { Vendor } from 'src/app/model/vendor';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent {
  pageTitle: string = "Vendor List"
  vendors: Vendor[] = [
    {
      "id": 0,
      "code": "KR",
      "name": "Kroger",
      "address": "1014 Vine St",
      "city": "Cincinnati",
      "state": "OH",
      "zip": "45202",
      "phoneNumber": "1-800-576-4377",
      "email": "contact@kroger.com"
    },
    {
      "id": 1,
      "code": "AMZN",
      "name": "Amazon",
      "address": "410 Terry Ave N",
      "city": "Seattle",
      "state": "WA",
      "zip": "98109",
      "phoneNumber": "1-888-280-4331",
      "email": "contact@amazon.com"
    },
    {
      "id": 2,
      "code": "SBUX",
      "name": "Starbucks",
      "address": "2401 Utah Avenue, South, Suite 800",
      "city": "Seattle",
      "state": "WA",
      "zip": "98134",
      "phoneNumber": "206-447-1575",
      "email": "contact@starbucks.com"
    }
  ]
}
