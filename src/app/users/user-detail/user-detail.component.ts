import { Component } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {
  pageTitle: string = "User Detail"
  user: any = {
    "id": 0,
    "username": "kmatthey",
    "password": "p@55word",
    "firstname": "Kait",
    "lastname": "Matthey",
    "phone": "513-525-7229",
    "email": "kaitannmatthey@gmail.com",
    "isReviewer": true,
    "isAdmin": false
  }
}
