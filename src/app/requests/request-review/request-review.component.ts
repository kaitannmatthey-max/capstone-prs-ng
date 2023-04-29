import { Component } from '@angular/core';
import { Request } from 'src/app/model/request';

@Component({
  selector: 'app-request-review',
  templateUrl: './request-review.component.html',
  styleUrls: ['./request-review.component.css']
})
export class RequestReviewComponent {
  pageTitle: string = "Review List"
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
