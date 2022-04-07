import { Component, OnInit } from '@angular/core';
import UsersJson from './users.json';

interface USERS {
  id: Number;
  name: String;
  username: String;
  email: String;
}
@Component({
  selector: 'app-users-json',
  templateUrl: './users-json.component.html',
  styleUrls: ['./users-json.component.css']
})
export class UsersJsonComponent implements OnInit {

  Users: USERS[] = UsersJson;
  constructor(){
    console.log(this.Users);
  }

  ngOnInit(): void {
  }

}
