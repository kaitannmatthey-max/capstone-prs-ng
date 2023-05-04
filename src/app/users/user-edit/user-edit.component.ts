import { Component } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent {
  user: User = new User()
  id: number = 0

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    this.route.params.subscribe(parameters => this.id = parameters['id']);
    this.userService.get(this.id).subscribe(jr => this.user = jr as User);
  }

  update(): void {
    this.userService.update(this.user).subscribe(jr => this.router.navigateByUrl("/user/list"));
  }

}
