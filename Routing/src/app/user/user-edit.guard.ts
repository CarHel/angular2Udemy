import { Observable } from 'rxjs/Rx';
import { CanDeactivate } from '@angular/router';

export interface ComponentCanDeactivate {
    canDeactivate: () => boolean | Observable<boolean>;
}

export class UserEditGuard implements CanDeactivate<ComponentCanDeactivate>{
    canDeactivate(component: ComponentCanDeactivate): boolean | Observable<boolean> {
        return component.canDeactivate ? component.canDeactivate() : true;
    }
}