import { Component } from '@angular/core';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent {
  pageTitle: string = "Requests List"
  requests: any[] = [
    {
      "id": 0,
      "description": "Coffee",
      "justification": "Need coffee for the office so we can stay alert.",
      "rejectionReason": "",
      "submittedDate": "2023-03-19T00:41:27.563Z",
      "dateNeeded": "2023-03-31T00:41:27.563Z",
      "deliveryMode": "GROUND",
      "status": "NEW",
      "total": 300,
      "user": {
        "id": 2,
        "code": "SBUX",
        "name": "Starbucks",
        "address": "2401 Utah Avenue, South, Suite 800",
        "city": "Seattle",
        "state": "WA",
        "zip": "98134",
        "phone": "206-447-1575",
        "email": "contact@starbucks.com"
      }
    }
  ]
}
