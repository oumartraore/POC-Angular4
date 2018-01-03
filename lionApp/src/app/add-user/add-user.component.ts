import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';

@Component({
	selector: 'app-add-user',
	templateUrl: './add-user.component.html',
	styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  	constructor() { }

  	user1: User;

  	ngOnInit() {
  		this.user1 = new User(0, "John", "0123456789", new Date());
  	}

  	onSubmit() {
  		console.log("Formulaire pris en compte");
  	}

}
