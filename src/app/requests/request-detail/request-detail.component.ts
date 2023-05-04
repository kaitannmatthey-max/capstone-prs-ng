import { Component } from '@angular/core';
import { Request } from 'src/app/model/request';
import { Router, ActivatedRoute } from '@angular/router'; // we need this to get the url to get the id and to navigate to another page


@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent {
  id: number = 0 // initialize with dummy value
  url: string = ""

  constructor(
    private router: Router,
    private route: ActivatedRoute) { }

    ngOnInit() {
      // get the id from the url
      this.route.params.subscribe(parms => this.id = parms['id']);
      this.url = this.router.url;
    }
}
