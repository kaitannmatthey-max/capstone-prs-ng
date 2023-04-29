import { Component } from "@angular/core";
import { Product } from "src/app/model/product";

@Component({
    selector: 'products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css']
})
export class ProductListComponent {
    pageTitle: string = "Products List"
    products: Product[] = [ 
        { 
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
    ]
}