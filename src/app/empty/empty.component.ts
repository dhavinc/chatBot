import { Component, OnInit, Output } from '@angular/core';
import { SwitchService } from '../switch.service';

@Component({
  selector: 'app-empty',
  templateUrl: './empty.component.html',
  styleUrls: ['./empty.component.css']
})
export class EmptyComponent implements OnInit {
  empty = true;
  constructor(private swit: SwitchService) { }

  ngOnInit() {
  }
  onStart() {
    this.empty = false;
    this.swit.enabledHasBeenUpdated.next(this.empty);
  }
}
