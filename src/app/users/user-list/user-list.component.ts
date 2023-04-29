import { Component } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  pageTitle: string = "Users List"
  users: User[] = [
    {
      "id": 0,
      "userName": "kmatthey",
      "password": "p@55word",
      "firstName": "Kait",
      "lastName": "Matthey",
      "phoneNumber": "513-525-7229",
      "email": "kaitannmatthey@gmail.com",
      "isReviewer": true,
      "isAdmin": false
    },
    {
      "id": 1,
      "userName": "admin",
      "password": "admin",
      "firstName": "Admin",
      "lastName": "Test",
      "phoneNumber": "513-555-0123",
      "email": "admin@prs.com",
      "isReviewer": true,
      "isAdmin": true
    }
  
  
  ]
}
