import { Component } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent {
  pageTitle: string = "Create New User"
}
