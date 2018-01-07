import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';


@Component({
	selector: 'app-add-user',
	templateUrl: './add-user.component.html',
	styleUrls: ['./add-user.component.css']

})
export class AddUserComponent implements OnInit {

  	constructor() { }

  	user1: User;

  	ngOnInit() {
  		this.user1 = {
  			id : 0,
  			name : "John",
  			phone : "123456789",
  			birthday : new Date()
  		}
  		//this.user1 = new UserPOC(0, "John", "0123456789", new Date());
  	}

  	onSubmit() {
  		console.log("Formulaire pris en compte");
  		console.log(this.user1);
  	}

}
