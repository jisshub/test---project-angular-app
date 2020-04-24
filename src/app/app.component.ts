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
                    content: "sample content",
                    date: new Date().toLocaleDateString()}];

  OnServerAdded(serverData: {serverName: string, serverContent: string, serverDate: string}){
      this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent,
      date: serverData.serverDate
    });
  }
  OnBluePrintAdded(blueprintData: {serverName: string, serverContent: string, serverDate: string}){
      this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent,
      date: blueprintData.serverDate,
    });
  }
}

