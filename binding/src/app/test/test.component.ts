import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h1>My name is {{name}}</h1>
  <h2>{{2+2}}</h2>
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  public name = 'Mr_Kabuteyy'
}
