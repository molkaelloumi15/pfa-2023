import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';
import {UserService} from '../../Services/user.service';
import {User} from '../../Model/User';
import {MdbModalRef, MdbModalService} from 'mdb-angular-ui-kit/modal';
import {DeleteModal} from '../../components/delete-modal/delete-modal.component';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

    constructor(private router: Router,
                private modalService: MdbModalService,
                private userService: UserService) {
    }

    public list: User[] = [];
    public display: User[] = [];
    modalRef: MdbModalRef<DeleteModal>;
    fonction = ['Amdinistrateur', 'Visiteur', 'Directeur']

    ngOnInit(): void {
        this.getUsers();
    }

    getUsers(): void {
        this.userService.getUsers().subscribe(
            (response: User[]) => {
                this.list = response;
                this.display = response;
            }, (error: HttpErrorResponse) => {
                alert(error.message);
            }
        );
    }

    deleteModal(mail: string) {
        this.modalRef = this.modalService.open(DeleteModal);
        this.modalRef.onClose.subscribe((message: any) => {
            // tslint:disable-next-line:triple-equals
            if (message == true)
                this.userService.deleteUser(mail).subscribe(
                    (resolve: void) => {
                        this.getUsers();
                    }
                );
        });
    }

    public search(key: string): void {
        this.display = [];
        for (const i of this.list) {
            if (i.username.toLowerCase().indexOf(key.toLowerCase()) !== -1
                || i.fonction.toLowerCase().indexOf(key.toLowerCase()) !== -1
                || i.mail.toLowerCase().indexOf(key.toLowerCase()) !== -1
            ) {
                this.display.push(i);
            }
        }
    }

    newjob(i) {
        this.userService.updateUser(i).subscribe(
            (result: User) => {
                console.log(result);
            }, (error: HttpErrorResponse) => {
                console.log(error.message);
            }
        );
    }
}
