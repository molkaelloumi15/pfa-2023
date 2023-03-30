import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {User} from '../../../Model/User';
import {UserService} from '../../../Services/user.service';

@Component({
    selector: 'app-my-profile',
    templateUrl: './my-profile.component.html',
    styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {

    currentUser: User;
    passe = '';

    constructor(private route: ActivatedRoute,
                private userService: UserService,
                private router: Router) {
    }

    ngOnInit(): void {
        this.currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    }

    onSubmit(form: NgForm) {
        console.log(this.currentUser);
        // @ts-ignore
        this.userService.updateUser(this.currentUser).subscribe(
            (resonse: User) => {
                sessionStorage.removeItem('currentUser');
                sessionStorage.setItem('currentUser', JSON.stringify(this.currentUser));
                window.location.reload();
            }, (error: any) => {
                console.log(error.messge);
            }
        );
    }

    samePass(pass: string) {
        this.passe = pass;
    }
}
