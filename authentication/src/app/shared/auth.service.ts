import { User } from './user.interface';
export class Authservice {
    signupUser(user: User) {

        var user = firebase.auth().currentUser;

        if (user) {
            // User is signed in.
        } else {
            // No user is signed in.
        }

    }
}