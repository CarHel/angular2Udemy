import { Authservice } from './../shared/auth.service';
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
    template: `
        <h3>Please sign up to use all features</h3>
        
        <form [formGroup]="myForm"  (ngSubmit)="onSignin()">
        <div  >
            <div class="form-group">
                <label for="email">E-Mail</label>
                <input formControlName="email" class="form-control" type="email" id="email">
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input formControlName="password" class="form-control" type="password" id="password">
            </div>
            <button type="submit" class="btn btn-primary" [disabled]="!myForm.valid">Sign In</button>
            </div>
        </form>
    `
})
export class SigninComponent implements OnInit {
    myForm: FormGroup;
    error = false;
    errorMessage = '';

    constructor(private fb: FormBuilder, private authService: Authservice) { }

    onSignin() {
        this.authService.signinUser(this.myForm.value);
    }

    ngOnInit(): any {
        this.myForm = this.fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required],
        });
    }
}
