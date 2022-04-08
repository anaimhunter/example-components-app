import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardAdminComponent } from './signup-login/board-admin/board-admin.component';
import { BoardModeratorComponent } from './signup-login/board-moderator/board-moderator.component';
import { BoardUserComponent } from './signup-login/board-user/board-user.component';
import { HomeComponent } from './signup-login/home/home.component';
import { LoginComponent } from './signup-login/login/login.component';
import { ProfileComponent } from './signup-login/profile/profile.component';
import { RegisterComponent } from './signup-login/register/register.component';
import { AddUserComponent } from './users-components/add-user/add-user.component';
import { EditUserComponent } from './users-components/edit-user/edit-user.component';
import { UsersListComponent } from './users-components/users-list/users-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'home/list', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, 
    children:[
      { path: 'add', component: AddUserComponent },
      { path: 'edit/:id', component: EditUserComponent },
      { path: 'list', component: UsersListComponent }
  ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent},
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
