import {Component, OnInit} from '@angular/core';
import {MdbModalRef} from 'mdb-angular-ui-kit/modal';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {User} from '../../Model/User';
import {UserService} from '../../Services/user.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

    user: User = {
        mail: '',
        pass: '',
        username: '',
        fonction: 'Visiteur'
    }
    passe = '';
    goodmail = false;
    correcte = true;

    constructor(public modalRef: MdbModalRef<SignInComponent>,
                public userService: UserService,
                private router: Router) {
    }

    ngOnInit(): void {
    }

    close() {
        this.modalRef.close(false)
    }

    onSubmit(form: NgForm) {
        console.log(this.user);
        this.userService.getUserByMail(this.user.mail).subscribe(
            (result: User) => {
                this.correcte = false;
            }, (error: HttpErrorResponse) => {
                this.userService.addUser(this.user).subscribe(
                    (result: User) => {
                        this.modalRef.close()
                        sessionStorage.setItem('currentUser', JSON.stringify(this.user));
                        this.router.navigate(['dashboard']);
                        window.location.reload();
                    }, (errore: HttpErrorResponse) => {
                        this.correcte = false;
                    }
                );
            }
        );

    }

    mailing(key: string) {
        const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        this.goodmail = email.test(key);
    }

    samePass(pass: string) {
        this.passe = pass;
    }
}
