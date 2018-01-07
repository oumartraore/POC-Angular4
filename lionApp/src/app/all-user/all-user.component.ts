import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserServiceService } from '../services/user-service.service';

@Component({
	selector: 'app-all-user',
	templateUrl: './all-user.component.html',
	styleUrls: ['./all-user.component.css'],
	providers: [UserServiceService]
})
export class AllUserComponent implements OnInit {

	users: User[] = [];

	constructor(private userServiceService: UserServiceService) { 
		this.userServiceService.getAllUser()
			.then(results => this.users = results)
			.catch(error => console.log(error));
	}

	ngOnInit() {
	}

}
