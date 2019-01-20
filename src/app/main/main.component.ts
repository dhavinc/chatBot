import { Component, OnInit } from '@angular/core';
import { SwitchService } from '../switch.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  empty = true;
  constructor(private swit: SwitchService) { }

  ngOnInit() {
    this.swit.enabledHasBeenUpdated.subscribe(
      (state: boolean) => {
        this.empty = state;
      }
    );
  }

}
