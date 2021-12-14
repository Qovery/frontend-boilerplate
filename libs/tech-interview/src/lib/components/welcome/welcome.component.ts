import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'tech-interview-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class WelcomeComponent implements OnInit {

  constructor() {}

  public ngOnInit(): void {
    // todo actual call to the store fetching the todo
  }

}
