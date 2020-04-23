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

  OnServerAdded(serverData: {serverName: string, serverContent: string}){
      this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }
  OnBluePrintAdded(blueprintData: {serverName: string, serverContent: string}){
      this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }
}

