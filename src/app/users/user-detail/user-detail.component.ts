import { Component } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';
import { Router, ActivatedRoute } from '@angular/router'; // we need this to get the url to get the id and to navigate to another page

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {
  pageTitle: string = "User Detail"
  user: User = new User()
  id: number = 0 // initialize with dummy value

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    // get the id from the url
    this.route.params.subscribe(parms => this.id = parms['id']);
    this.userService.get(this.id).subscribe(jr => this.user = jr as User);
  }

  delete() {
    this.userService.delete(this.id).subscribe(jr => this.router.navigateByUrl("user/list"));
  }
}
