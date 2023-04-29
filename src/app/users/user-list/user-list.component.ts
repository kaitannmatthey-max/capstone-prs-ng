import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  pageTitle: string = "Users List"
  users: any[] = [
    {
      "id": 0,
      "username": "kmatthey",
      "password": "p@55word",
      "firstname": "Kait",
      "lastname": "Matthey",
      "phone": "513-525-7229",
      "email": "kaitannmatthey@gmail.com",
      "isReviewer": true,
      "isAdmin": false
    },
    {
      "id": 1,
      "username": "admin",
      "password": "admin",
      "firstname": "Admin",
      "lastname": "Test",
      "phone": "513-555-0123",
      "email": "admin@prs.com",
      "isReviewer": true,
      "isAdmin": true
    }
  
  
  ]
}
