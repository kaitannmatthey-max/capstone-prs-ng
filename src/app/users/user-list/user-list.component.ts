import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  pageTitle: string = "Users List"
  users: User[] = [];

  constructor(
    private userService: UserService) {}
  //   protected systemService: SystemService) { 
  //     super(systemService);
  // }

  ngOnInit() {
    // super.ngOnInit();
    // console.log("User list - Verify we have a logged in user!");
    // console.log("User: ", this.loggedInUser);
    // console.log("Admin? ", this.isAdmin); 
    // console.log("Reviewer? ", this.isReviewer);

    // subscribe to the list of users we get from the get request
    this.userService.list().subscribe(jsonResponse => {
      // add the data inside the returned JsonResponse to the array of users
      this.users = jsonResponse as User[];
    });
  }
}
