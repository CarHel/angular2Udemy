import { Subscription } from 'rxjs/Rx';
import { Authservice } from './auth.service';
import { Component ,OnDestroy } from "@angular/core";

@Component({
    selector: 'my-header',
    template: `
       
        <header>
            <nav class="navbar navbar-default">
                <div class="container-fluid">
        
                    <ul class="nav navbar-nav">
        
                        <li><a [routerLink]="['signup']">Sign Up</a></li>
                        <li><a [routerLink]="['signin']">Sign In</a></li>
                        <li><a [routerLink]="['protected']">Protected</a></li>
        
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
        
                        <li><a (click)="onLogout()" style="cursor: pointer;" *ngIf="isAuth()">Logout</a></li>
                    </ul>
                </div><!-- /.container-fluid -->
        
            </nav>
        
        </header>
    `
})
export class HeaderComponent implements OnDestroy{
    private subscription:Subscription;
    private isAuthenticated=false;
    constructor(private authService:Authservice){
      this.subscription=  this.authService.isAuthenticated().subscribe(t=>this.isAuthenticated=t);
    }
    isAuth(){
        return this.isAuthenticated;
        
    }

    onLogout(){
        this.authService.logout();
    }

    ngOnDestroy()
    {
        this.subscription.unsubscribe();
    }
}
