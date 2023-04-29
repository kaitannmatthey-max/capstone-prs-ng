import { Component } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent {
  product: Product = { 
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
