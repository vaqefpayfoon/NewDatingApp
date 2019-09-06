import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode = false;

  constructor() { }

  ngOnInit() {

    // const source$ = range(0, 10);

    // source$.pipe(
    //   filter(x => x % 2 === 0),
    //   map(x => x + x),
    //   scan((acc, x) => acc + x, 0)
    // )
    // .subscribe(x => console.log(x))
  }

  registerToggle() {
    this.registerMode = true;
  }

  cancelRegisterMode(registerMode: boolean) {
    this.registerMode = registerMode;
  }

}
