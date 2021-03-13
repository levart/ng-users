import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {UserCreateComponent} from './components/user-create/user-create.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from './components/users/users.component';
import {UserUpdateComponent} from './components/user-update/user-update.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/users'
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'users/create',
    component: UserCreateComponent
  },
  {
    path: 'users/update/:userId',
    component: UserUpdateComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    UserCreateComponent,
    UsersComponent,
    UserUpdateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
