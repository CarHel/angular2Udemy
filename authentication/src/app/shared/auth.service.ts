import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { User } from './user.interface';
import {Subject,Observable} from "rxjs"

declare var firebase: any;

@Injectable()
export class Authservice {
    constructor(private router: Router) { }

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

    logout() {
        firebase.auth().signOut();
        this.router.navigate(['']);
    }

    isAuthenticated() :Observable<boolean>{
        const subject=new Subject<boolean>();
        var user = firebase.auth().onAuthStateChanged(function (user) {            
            if (user) {
                return subject.next(true);
            } else {
                return subject.next(false);
            }
        });
        return subject.asObservable();
    }
}