import { Component } from '@angular/core';
import { Request } from 'src/app/model/request';
import { Router, ActivatedRoute } from '@angular/router'; // we need this to get the url to get the id and to navigate to another page

@Component({
  selector: 'app-request-edit',
  templateUrl: './request-edit.component.html',
  styleUrls: ['./request-edit.component.css']
})
export class RequestEditComponent {
  id: number = 0 // initialize with dummy value
  url: string = ""
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

  constructor(
    private router: Router,
    private route: ActivatedRoute) { }

    ngOnInit() {
      // get the id from the url
      this.route.params.subscribe(parms => this.id = parms['id']);
      this.url = this.router.url;
    }
}
