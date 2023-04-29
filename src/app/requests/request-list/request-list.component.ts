import { Component } from '@angular/core';
import { Request } from 'src/app/model/request';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent {
  pageTitle: string = "Requests List"
  requests: Request[] = [
    {
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
        "userName": "kmatthey",
        "password": "p@55word",
        "firstName": "Kait",
        "lastName": "Matthey",
        "phoneNumber": "513-525-7229",
        "email": "kaitannmatthey@gmail.com",
        "isReviewer": true,
        "isAdmin": false
      }
    }
  ]
}
