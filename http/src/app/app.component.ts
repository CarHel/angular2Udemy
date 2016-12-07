import { HttpService } from './http.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [HttpService]
})
export class AppComponent {
  items: any[] = [];
  asyncString=this.httpService.getData();
  constructor(private httpService: HttpService) { }

  onSubmit(username: string, email: string) {
    this.httpService.sendData({ username: username, email: email }).subscribe(t => console.log(t));
  }

  onGetData() {
    this.httpService.getOwnData()
      .subscribe(t => {
        this.items = [];
        for (let key in t) {
          this.items.push(t[key]);
        }
      });
  }
}
