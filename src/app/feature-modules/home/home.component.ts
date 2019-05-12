import { Component } from '@angular/core';
import { first } from 'rxjs/operators';
import { User } from 'src/app/models';
import { AuthenticationService } from 'src/app/shared/authentication.service';
import { UserService } from 'src/app/shared/user.service';


@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    currentUser: User;
    userFromApi: User;
    POSTLIST = [
        {
            title: 'post one',
            detail: 'oneoneone'
        }
    ];
    constructor(
        private userService: UserService,
        private authenticationService: AuthenticationService
    ) {
        this.currentUser = this.authenticationService.currentUserValue;
    }

    ngOnInit() {
        this.userService.getById(this.currentUser.id).pipe(first()).subscribe(user => {
            this.userFromApi = user;
        });
    }
    onEmittedValue(e){
        this.POSTLIST.push(e);
        console.log('home',e);
    }
}