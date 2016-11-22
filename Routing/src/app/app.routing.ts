import { UserComponent } from './user/user.component';
import { HomeComponent } from './home-component.component';
import {Routes,RouterModule} from '@angular/router';
const APP_ROUTES:Routes=[
    {path:'user/:id',component:UserComponent},
        {path:'user',component:HomeComponent},
    {path: '',component:HomeComponent}
]

export const routing=RouterModule.forRoot(APP_ROUTES);