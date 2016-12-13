import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { User } from './user.interface';

declare var firebase: any;

@Injectable()
export class Authservice {
constructor(private router:Router){}

    signupUser(user: User) {
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password).catch(function (error) {
            console.log(error);
        });
    }

    signinUser(user: User) {
        firebase.auth().signInWithEmailAndPassword(user.email, user.password).catch(function (error) {
            console.log(error);
        });
    }

logout(){
    firebase.auth().signOut();
    this.router.navigate(['']);
}

    isAuthenticated() {
        var user = firebase.auth().currentUser;

        if (user) {
       return true;
        } else {
            return false;
        }
    }
}