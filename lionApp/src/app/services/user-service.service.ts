import { Injectable } from '@angular/core';
import { User } from '../models/user';


@Injectable()
export class UserServiceService {

	public users: User[] = [];

  	constructor() { 

  	} 

  	getAllUser(): Promise<User[]> {
        /*if(!!this.users) {
            console.log("Pourquoi ici ?");
            return Promise.resolve(this.users);
        }else {*/
            let i: number = 0;
            for(i = 0; i < 10; i++) {
                let user1 : User = {
                    id : i,
                    name : "Oumar " + i,
                    phone : "12345",
                    birthday : new Date()
                };

                this.users.push(user1);
            }

            return new Promise((resolve, reject) => {
                resolve(this.users);
            });
        //}
  	}
}
