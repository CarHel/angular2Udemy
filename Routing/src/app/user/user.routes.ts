import { UserEditGuard } from './user-edit.guard';
import { UserDetailGuard } from './user-detail.guard';
import { UserEditComponent } from './user-edit.component';
import { UserDetailComponent } from './user-detail.component';
import { Routes } from '@angular/router';

export const USER_ROUTES:Routes=[
{path:'detail',component:UserDetailComponent,canActivate:[UserDetailGuard]},
{path:'edit',component:UserEditComponent,canDeactivate:[UserEditGuard]}
];