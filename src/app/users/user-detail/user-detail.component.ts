import { Component } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {
  pageTitle: string = "User Detail"
  user: User = {
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
