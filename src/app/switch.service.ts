import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SwitchService {
  enabledHasBeenUpdated = new Subject<boolean>();
  constructor() { }

}
