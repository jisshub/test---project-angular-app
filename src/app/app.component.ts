import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // define serverElements array
  serverElements = [{type: "server",
                    name:"test server",
                    content: "sample content"}];
}

