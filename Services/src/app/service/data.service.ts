import {Injectable,EventEmitter} from '@angular/core'
 import {LogService} from './log.service';

@Injectable()
export class DataService {
  pushDataEvent= new EventEmitter();
  private data: string[] = [];
  constructor(private logService:LogService){}

  addData(input: string) {
    this.data.push(input);
    this.logService.writeToLog(input);
  }
  getData() {
    return this.data;
  }

  pushData(value:string){
    this.pushDataEvent.emit(value);
  }

}
