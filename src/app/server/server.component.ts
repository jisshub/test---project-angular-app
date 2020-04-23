import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  // attach a buit in input decorator to the element property-
  // will make it available outside this component
  
  // <!-- so any component accessing the element property will be 
  // able to use the element property of ServerComponent class-->

  // we can even alias to our element property
  // and use that alias in appcomponent.
  @Input('myElement') element: {type:string, name:string, content:string};
  constructor() { }

  ngOnInit(): void {
  }

}
