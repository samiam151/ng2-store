import { Injectable } from '@angular/core';
import { IUser } from './user';

@Injectable()
export class AuthService {
    constructor() { }
    currentUser:IUser
    
    loginUser(username: string, password: string){
        this.currentUser = {
            id: 1,
            username: username,
            firstName: 'Nick',
            lastname: 'Sam'
        }
    }

    isAuthenticated(){
        return !!this.currentUser;
    }
}