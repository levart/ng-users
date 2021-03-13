import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../service/user.service';
import {UserRequest} from '../../interfaces/user';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {

  form: FormGroup;
  isCreated = false;

  constructor(
    private userService: UserService
  ) {
    this.form = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
    });
  }

  ngOnInit(): void {
  }

  createUser(): void {

    if (this.form.invalid) {
      return;
    }
    const {firstName, lastName, email} = this.form.value;
    const params: UserRequest = {
      firstName,
      lastName,
      email,
    };
    this.userService.createUser(params)
      .subscribe(res => {
        if(res){
          this.isCreated = true;
          this.form.reset();
          setTimeout(() => this.isCreated = false, 2500);
        }
      });

  }
}
