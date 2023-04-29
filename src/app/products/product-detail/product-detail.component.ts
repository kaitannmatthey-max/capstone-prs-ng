import { Component } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  pageTitle: string = "Product Detail"
  product: any = { "id": 1, "partNumber": "CCC-1234", "name": "Coca-Cola Classic 40 pack", "price": 8.99, "unit": "each", "photoPath": null, "vendor": { "id": 1, "code": "CODE-1234", "name": "Wally World", "address": "123 Capitalism Lane", "city": "Cincinnati", "state": "OH", "zip": "45202", "phone": "5135551234", "email": "customercare@wallyworld.net" } }
}
