import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from '../../service/user.service';
import {User} from '../../interfaces/user';
import {Observable, of, Subject} from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users$: Observable<User[]> = of([]);
  user!: User;

  constructor(
    private userService: UserService
  ) {
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.users$ = this.userService.getUsers();
  }

  getUserById(userId: string | number): void {
    this.userService.getUserById(userId)
      .subscribe(user => {
        if (user) {
          this.user = user;
        }
      });
  }


  editUser(user: User): void {
    if (user && user.id) {
      this.userService.updateUser(user)
        .subscribe(res => {
          console.log(res);
        });
    }
  }

  deleteUser(userId: string | number): void {
    this.userService.deleteUser(userId)
      .subscribe(res => {
        if (res) {
          this.getUsers();
        }
      });
  }


}
