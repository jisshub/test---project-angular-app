import { Component, OnInit, Output } from '@angular/core';
// import EventEmitetr class from angular/core
import { EventEmitter } from '@angular/core'

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  // create twoo properties which are marked as event emitters
 // use @Ouput() before each event emitter, since v r outputting this events to our app component.
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  // we can even assign alias to our custom event
  @Output('bpCreated') bluePrintCreated = new EventEmitter<{serverName: string, serverContent:string}>();
  // these two eventEmiters are used in appcomponent.html
  // these eventemitetrs are objects in angular which allows to emit our 
  // own custom events

  newServerName = '';
  newServerContent = '';
  constructor() { }

  ngOnInit(): void {
  }
  onAddServer() {
    // emita  serverCreated event with an object as its arguments
    this.serverCreated.emit({
      serverName: this.newServerName, 
      serverContent: this.newServerContent
    });
  }

  onAddBlueprint() {
    // emit blurprintcreted event with an object as it argument
    this.bluePrintCreated.emit({
      serverName: this.newServerName, 
      serverContent: this.newServerContent
    })
  }

}
