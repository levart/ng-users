import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../service/user.service';
import {User, UserRequest} from '../../interfaces/user';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss']
})
export class UserUpdateComponent implements OnInit {

  form: FormGroup;
  isUpdated = false;

  user!: User;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {
    this.form = new FormGroup({
      id: new FormControl(null, Validators.required),
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(route => {
      if (route && route.userId) {
        this.getUserById(route.userId);
      }
    });
  }

  getUserById(userId: number): void {
    this.userService.getUserById(userId)
      .subscribe(user => {
        if (user) {
          this.user = user;
          this.form.patchValue(this.user);
        }
      });
  }

  updateUser(): void {

    if (this.form.invalid) {
      return;
    }
    const {id, firstName, lastName, email} = this.form.value;
    const params: User = {
      id,
      firstName,
      lastName,
      email,
    };
    this.userService.updateUser(params)
      .subscribe(res => {
        if (res) {
          this.isUpdated = true;
          this.form.reset();
          setTimeout(() => this.isUpdated = false, 2500);
        }
      });

  }

}
