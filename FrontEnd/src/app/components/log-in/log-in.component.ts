import {Component, OnInit} from '@angular/core';
import {User} from '../../Model/User';
import {MdbModalRef} from 'mdb-angular-ui-kit/modal';
import {UserService} from '../../Services/user.service';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
    selector: 'app-log-in',
    templateUrl: './log-in.component.html',
    styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

    user: User = {
        mail: '',
        pass: '',
        username: '',
        fonction: ''
    }
    correcte = true;
    IncorrectPass = false;

    constructor(public modalRef: MdbModalRef<LogInComponent>,
                public userService: UserService,
                private router: Router) {
    }

    ngOnInit(): void {
    }

    close() {
        this.modalRef.close(false)
    }

    onSubmit(form: NgForm) {
        this.userService.getUserByMail(this.user.mail).subscribe(
            (result: User) => {
                if (this.user.pass === result.pass) {
                    this.modalRef.close()
                    sessionStorage.setItem('currentUser', JSON.stringify(result));
                    this.router.navigate(['dashboard']);
                    window.location.reload();
                } else
                    this.IncorrectPass = true;

            }, (error: HttpErrorResponse) => {
                this.correcte = false;
            }
        );
    }
}
