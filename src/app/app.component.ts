import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items: Array<any> = [];
  title = 'app';

  constructor() {
    this.items = [
      { name: 'assets/images/f14.png' },
      { name: 'assets/images/blackbuck.png' },
      { name: 'assets/images/aquarium.png' },
      { name: 'assets/images/baboon.png' },
      { name: 'assets/images/bubble_chamber.png' },
      { name: 'assets/images/move1.png' },
      { name: 'assets/images/bell_206.png' },
      { name: 'assets/images/buffalo.png' },
      { name: 'assets/images/coins.png' },
      { name: 'assets/images/dog_shadow.png' },
      { name: 'assets/images/glassware_noisy.png' },
      { name: 'assets/images/lena.png' },
    ]
  }
}