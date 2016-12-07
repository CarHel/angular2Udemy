import { User } from './user.interface';

declare var firebase:any;

export class Authservice {
    signupUser(user: User) {
firebase.auth().createUserWithEmailAndPassword(user.email,user.email).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});

    }
}