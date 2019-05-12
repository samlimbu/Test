import { Component, OnInit, Input } from '@angular/core';
import { AuthenticationService } from 'src/app/shared/authentication.service';
import { Router } from '@angular/router';
import { User, Role } from 'src/app/models';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
currentUser: User;
    @Input() toggled : boolean = false;

    constructor( public authenticationService: AuthenticationService,
        private router: Router
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }
ngOnInit(){}
    get isAdmin() {
        return this.currentUser && this.currentUser.role === Role.Admin;
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/']);
    }
}