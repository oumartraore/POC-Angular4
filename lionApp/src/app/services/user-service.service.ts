import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable, Subscriber } from 'rxjs/Rx'


@Injectable()
export class UserServiceService {

	public users: User[] = [];

  	constructor() { 

  	} 

    // Méthode 1 : Avec les promises 
  	getAllUser2(): Promise<User[]> {
        //if(!!this.users) {
            //console.log("Pourquoi ici ?");
            //return Promise.resolve(this.users);
        //}else {
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

    // Méthode 2 : Avec les observables
    getAllUser(): Observable<User[]> {
        let i: number = 0;
        for(i = 0; i < 10; i++) {
            let user1 : User = {
                id : i,
                name : "OumarG " + i,
                phone : "12345",
                birthday : new Date()
            };

            this.users.push(user1);
        }

        return Observable.create(
            (observer : Subscriber<User[]>) => {
                observer.next(this.users);
            }
        );
    }
}
