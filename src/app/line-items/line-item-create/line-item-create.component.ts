import { Component, OnInit } from '@angular/core';
import { LineItem } from 'src/app/model/line-item';
import { Product } from 'src/app/model/product';
import { Request } from 'src/app/model/request';
import { LineItemService } from 'src/app/service/line-item.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-line-item-create',
  templateUrl: './line-item-create.component.html',
  styleUrls: ['./line-item-create.component.css']
})
export class LineItemCreateComponent implements OnInit {
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

  lineItem!: LineItem

  request: Request = {
    "id": 0,
    "description": "Coffee",
    "justification": "Need coffee for the office so we can stay alert.",
    "reasonForRejection": "",
    "submittedDate": new Date(),
    "dateNeeded": new Date(),
    "deliveryMode": "GROUND",
    "status": "NEW",
    "total": 300,
    "user": {
      "id": 0,
      "username": "kmatthey",
      "password": "p@55word",
      "firstName": "Kait",
      "lastName": "Matthey",
      "phone": "513-525-7229",
      "email": "kaitannmatthey@gmail.com",
      "isReviewer": true,
      "isAdmin": false
    }
  }

  id: number = 0

  constructor(
    private lineItemService: LineItemService,
    private route: ActivatedRoute) { 
      // notes: I'll need to get my request service imported and in my constructor so I can get the request by id
    }

    ngOnInit() {
      this.route.params.subscribe(paremeters => this.id = paremeters['id']);
      this.lineItem = new LineItem(this.request, this.products, this.lineItem.quantity);
    }

  save(): void {
    this.lineItemService.save(this.lineItem).subscribe(jsonResponse => this.lineItem = jsonResponse as LineItem)
  }

}
