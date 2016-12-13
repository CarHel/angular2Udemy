import { User } from './user.interface';

declare var firebase: any;

export class Authservice {
    signupUser(user: User) {
        firebase.auth().createUserWithEmailAndPassword(user.email, user.email).catch(function (error) {
            console.log(error);
        });
    }
    signinUser(user: User) {
        firebase.auth().signInWithEmailAndPassword(user.email, user.email).catch(function (error) {
            console.log(error);
        });
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