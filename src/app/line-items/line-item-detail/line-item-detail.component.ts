import { Component } from '@angular/core';

@Component({
  selector: 'app-line-item-detail',
  templateUrl: './line-item-detail.component.html',
  styleUrls: ['./line-item-detail.component.css']
})
export class LineItemDetailComponent {
  lineItem: any = {
    "id": 0,
    "requestId": 0,
    "productId": 0,
    "quantity": 2,
    "product": { 
      "id": 0, 
      "partNumber": "0085080800500", 
      "name": "Moon Cheese™ Cheddar Believe It Crunchy Snacks", 
      "price": 4.49, 
      "unit": "each", 
      "photoPath": "../../../assets/moon-cheese.jpg", 
      "vendor": {
          "id": 0,
          "code": "KR",
          "name": "Kroger",
          "address": "1014 Vine St",
          "city": "Cincinnati",
          "state": "OH",
          "zip": "45202",
          "phoneNumber": "1-800-576-4377",
          "email": "contact@kroger.com"
        }
  }
  }
}
